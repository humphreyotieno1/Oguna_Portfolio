import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 z-10 font-montserrat">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center z-10">
                    <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        CO
                    </Link>
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Chrispin Oguna. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/chrispin-oguna/"
                            className="hover:text-indigo-400 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://twitter.com/chrispinoguna"
                            className="hover:text-indigo-400 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://github.com/chrispinoguna"
                            className="hover:text-indigo-400 transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

