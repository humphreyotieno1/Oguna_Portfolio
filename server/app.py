from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
import os
from dotenv import load_dotenv
from logging.handlers import RotatingFileHandler
import re
from email.utils import formataddr

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Configure logging
if not os.path.exists('logs'):
    os.makedirs('logs')

logging.basicConfig(level=logging.INFO)
handler = RotatingFileHandler(
    'logs/app.log', 
    maxBytes=10000000, 
    backupCount=5
)
handler.setFormatter(logging.Formatter(
    '[%(asctime)s] %(levelname)s [%(filename)s:%(lineno)d] - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
))
app.logger.addHandler(handler)

# Email configuration for Gmail
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')  # Use App Password for Gmail
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')
COMPANY_NAME = "Your Company Name"

def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_name(name):
    """Validate name format"""
    return bool(name and len(name.strip()) >= 2 and len(name.strip()) <= 50)

def validate_subject(subject):
    """Validate subject format"""
    return bool(subject and len(subject.strip()) >= 3 and len(subject.strip()) <= 100)

def validate_message(message):
    """Validate message format"""
    return bool(message and len(message.strip()) >= 10 and len(message.strip()) <= 5000)

def send_email(form_data):
    """Send email with enhanced error handling"""
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Contact Form Submission - {form_data['name']}"
        msg['From'] = formataddr((COMPANY_NAME, SMTP_USERNAME))
        msg['To'] = RECIPIENT_EMAIL
        msg['Reply-To'] = form_data['email']
        
        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
              <h2 style="color: #2c5282;">New Contact Form Submission</h2>
              <p><strong>Received on:</strong> {datetime.now().strftime('%B %d, %Y at %H:%M:%S')}</p>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Name:</strong> {form_data['name']}</p>
                <p><strong>Email:</strong> <a href="mailto:{form_data['email']}">{form_data['email']}</a></p>
                <p><strong>Subject:</strong> {form_data['subject']}</p>
              </div>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <h3 style="color: #2c5282; margin-top: 0;">Message:</h3>
                <p style="white-space: pre-wrap;">{form_data['message']}</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        msg.attach(MIMEText(html, 'html'))
        
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
            
        app.logger.info(f"Email sent successfully from {form_data['email']}")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        app.logger.error(f"SMTP Authentication Error: {str(e)}")
        raise Exception("Failed to authenticate with email server")
    except smtplib.SMTPException as e:
        app.logger.error(f"SMTP Error: {str(e)}")
        raise Exception("An error occurred while sending the email")
    except Exception as e:
        app.logger.error(f"Unexpected error while sending email: {str(e)}")
        raise

@app.route('/api/contact', methods=['POST'])
def handle_contact_form():
    """Handle contact form submissions with comprehensive validation"""
    try:
        data = request.get_json()
        app.logger.info(f"Received contact form submission from IP: {request.remote_addr}")
        
        # Validate all fields
        validation_errors = {}
        
        if not validate_name(data.get('name', '')):
            validation_errors['name'] = 'Name must be between 2 and 50 characters'
            
        if not validate_email(data.get('email', '')):
            validation_errors['email'] = 'Please provide a valid email address'
            
        if not validate_subject(data.get('subject', '')):
            validation_errors['subject'] = 'Subject must be between 3 and 100 characters'
            
        if not validate_message(data.get('message', '')):
            validation_errors['message'] = 'Message must be between 10 and 5000 characters'
            
        if validation_errors:
            app.logger.warning(f"Validation errors: {validation_errors}")
            return jsonify({
                'error': 'Validation failed',
                'errors': validation_errors
            }), 400
            
        # Send email
        send_email(data)
        
        return jsonify({
            'success': True,
            'message': 'Your message has been sent successfully!'
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({
            'error': 'Server error',
            'message': 'An error occurred while sending your message. Please try again later.'
        }), 500

if __name__ == '__main__':
    # Verify environment variables
    required_env_vars = ['SMTP_USERNAME', 'SMTP_PASSWORD', 'RECIPIENT_EMAIL']
    missing_vars = [var for var in required_env_vars if not os.getenv(var)]
    
    if missing_vars:
        app.logger.error(f"Missing required environment variables: {', '.join(missing_vars)}")
        raise RuntimeError("Missing required environment variables")
    
    app.logger.info(f"Starting server with email configuration: {SMTP_SERVER}:{SMTP_PORT}")
    app.run(debug=False, host='0.0.0.0', port=5000)