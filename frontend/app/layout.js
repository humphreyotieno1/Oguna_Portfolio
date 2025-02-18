import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chrispin Oguna - ICT Lecturer and HCIE Datacomm Expert",
  description:
    "Portfolio of Chrispin Oguna, an accomplished HCIE Datacomm expert with over 20 years of experience in ICT education and advanced network solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Outfit:wght@100..900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-lato">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
