import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader } from "lucide-react";
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name || formData.name.length < 2 || formData.name.length > 50) {
            newErrors.name = 'Name must be between 2 and 50 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }

        if (!formData.subject || formData.subject.length < 3 || formData.subject.length > 100) {
            newErrors.subject = 'Subject must be between 3 and 100 characters';
        }

        if (!formData.message || formData.message.length < 10 || formData.message.length > 5000) {
            newErrors.message = 'Message must be between 10 and 5000 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) {
                    if (data.errors) {
                        setErrors(data.errors);
                        Object.values(data.errors).forEach(error => {
                            toast.error(error);
                        });
                    } else {
                        throw new Error(data.message || 'Failed to send message');
                    }
                } else {
                    setIsSubmitted(true);
                    toast.success('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setErrors({});
                    setTimeout(() => setIsSubmitted(false), 3000);
                }
            } catch (error) {
                toast.error(error.message || 'An error occurred. Please try again later.');
                setErrors({ form: 'Failed to submit the form. Please try again.' });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            Object.values(errors).forEach(error => {
                toast.error(error);
            });
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };


    const successMessageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3, ease: "easeIn" }
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Let's Talk
                </motion.h2>

                <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white dark:bg-gray-800 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-[0_2px_10px_-3px_rgba(66,153,225,0.3)] rounded-md">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={formVariants}
                    >
                        <h3 className="text-gray-800 dark:text-gray-200 text-3xl font-bold">Get In Touch</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
                        </p>

                        <div className="mt-12">
                            <h4 className="text-gray-800 dark:text-gray-200 text-base font-bold">Contact Info</h4>
                            <ul className="mt-4 space-y-5">
                                <motion.li custom={0} variants={itemVariants} initial="hidden" animate="visible" className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="text-blue-500 w-5 h-5" />
                                    </div>
                                    <a href="tel:+254758171136" className="text-gray-700 dark:text-gray-300 text-sm ml-4 hover:text-blue-500">
                                        <small className="block text-gray-500 dark:text-gray-400">Phone</small>
                                        <strong>+254 758171136</strong>
                                    </a>
                                </motion.li>
                                <motion.li custom={1} variants={itemVariants} initial="hidden" animate="visible" className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="text-blue-500 w-5 h-5" />
                                    </div>
                                    <a href="mailto:chrispin.oguna@zetech.ac.ke" className="text-gray-700 dark:text-gray-300 text-sm ml-4 hover:text-blue-500">
                                        <small className="block text-gray-500 dark:text-gray-400">Email</small>
                                        <strong>chris.oguna@gmail.com</strong>
                                    </a>
                                </motion.li>
                                <motion.li custom={2} variants={itemVariants} initial="hidden" animate="visible" className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="text-blue-500 w-5 h-5" />
                                    </div>
                                    <div className="text-gray-700 dark:text-gray-300 text-sm ml-4">
                                        <small className="block text-gray-500 dark:text-gray-400">Location</small>
                                        <strong>Nairobi, Kenya</strong>
                                    </div>
                                </motion.li>
                            </ul>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-gray-800 dark:text-gray-200 text-base font-bold">Connect With Me</h4>
                            <motion.ul
                                className="flex mt-4 space-x-4"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                            >
                                {['linkedin'].map((social, index) => (
                                    <motion.li
                                        key={index}
                                        className="bg-[#e6e6e6cf] dark:bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a href="/https://www.linkedin.com/in/chrispin-oguna-01b364233/" className="text-blue-500 hover:text-blue-600 transition-colors">
                                            {/* {social === 'linkedin' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='currentColor' viewBox="0 0 24 24">
                                                    <path d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75z" />
                                                </svg>
                                            )} */}
                                            {social === 'linkedin' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill='currentColor' viewBox="0 0 24 24">
                                                    <path d="M5.372 24H.418V7.97h4.954V24zM2.892 5.79C1.295 5.79 0 4.474 0 2.895 0 1.316 1.295 0 2.892 0c1.596 0 2.892 1.316 2.892 2.895s-1.296 2.895-2.892 2.895zM24 24h-4.954v-8.2c0-1.84-.036-4.202-2.56-4.202-2.56 0-2.95 2.002-2.95 4.07V24H8.582V7.97h4.75v2.176h.07c.655-1.242 2.256-2.553 4.64-2.553 4.962 0 5.876 3.266 5.876 7.517V24z" />
                                                </svg>
                                            )}
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial="hidden"
                        animate="visible"
                        variants={formVariants}
                    >
                        {isSubmitted ? (
                            <motion.div
                                className="h-full flex flex-col items-center justify-center p-8 text-center"
                                variants={successMessageVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <>
                                <div>
                                    <input
                                        type='text'
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='Name'
                                        className={`w-full text-gray-800 dark:text-gray-200 rounded-md py-2.5 px-4 border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-transparent dark:bg-gray-700`}
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                                </div>

                                <div>
                                    <input
                                        type='email'
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Email'
                                        className={`w-full text-gray-800 dark:text-gray-200 rounded-md py-2.5 px-4 border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-transparent dark:bg-gray-700`}
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        type='text'
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder='Subject'
                                        className={`w-full text-gray-800 dark:text-gray-200 rounded-md py-2.5 px-4 border ${errors.subject ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} text-sm outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-transparent dark:bg-gray-700`}
                                    />
                                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Message'
                                        rows="6"
                                        className={`w-full text-gray-800 dark:text-gray-200 rounded-md px-4 border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} text-sm pt-2.5 outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-transparent dark:bg-gray-700`}
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                                </div>

                                {errors.form && (
                                    <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 px-4 py-3 rounded">
                                        <p>{errors.form}</p>
                                    </div>
                                )}

                                <motion.button
                                    type='submit'
                                    disabled={isSubmitting}
                                    className={`text-white bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 rounded-md text-sm px-4 py-2.5 w-full flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="w-4 h-4 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}