"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowDownCircle, Sun, Moon, ArrowUpCircle } from "lucide-react"
import { motion } from "framer-motion"
import About from "./About"
import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Publications from "./Publications"
import Awards from "./Awards"
import Contact from "./Contact"
import Volunteering from "./Volunteering"
import BlogSection from "./Blog"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Publications", href: "#publications" },
    { name: "Awards", href: "#awards" },
    { name: "Contact", href: "#contact" },
]

// Floating animation for background shapes
const floatingAnimation = {
    initial: { y: 0 },
    animate: {
        y: [-20, 20, -20],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
}

const HeroWithNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme")
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light")
        setTheme(initialTheme)
        document.documentElement.classList.toggle("dark", initialTheme === "dark")

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true)
            } else {
                setShowScrollToTop(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark")
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            <div className="dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
                {/* Animated Background */}
                <div className="fixed inset-0 z-0">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: [0, -100, 0],
                            y: [0, 100, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                        animate={{
                            x: [0, 50, 0],
                            y: [0, 50, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <nav className="bg-white/80 backdrop-blur-sm dark:bg-gray-800/90 shadow-md fixed w-full z-50 transition-all duration-300 font-montserrat">
                    {/* Navbar content remains the same */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center"
                            >
                                <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                                    CO
                                </Link>
                            </motion.div>
                            <div className="hidden md:flex items-center space-x-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-300"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.button
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "light" ? (
                                        <Moon className="h-5 w-5" />
                                    ) : (
                                        <Sun className="h-5 w-5" />
                                    )}
                                </motion.button>
                            </div>
                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center space-x-4">
                                {/* Theme toggle and menu button */}
                                <div className="md:hidden flex items-center space-x-4">
                                    <button
                                        onClick={toggleTheme}
                                        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                                        aria-label="Toggle theme"
                                    >
                                        {theme === "light" ? (
                                            <Moon className="h-5 w-5" />
                                        ) : (
                                            <Sun className="h-5 w-5" />
                                        )}
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    >
                                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden"
                        >
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="md:hidden"
                                >
                                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-bold transition-colors duration-300"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </nav>

                <section className="relative min-h-screen pt-16 font-montserrat z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8 min-h-[calc(100vh-4rem)]">
                            <div className="text-black dark:text-white">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                                >
                                    Chrispin Oguna
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="text-xl sm:text-2xl md:text-3xl mb-8"
                                >
                                    ICT Lecturer & HCIE Datacomm Expert
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    className="max-w-lg mt-3 text-lg leading-relaxed opacity-90 md:mt-8"
                                >
                                    Dedicated to empowering the next generation of ICT professionals through expert instruction and hands-on training in advanced networking and datacenter technologies.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    className="mt-8 space-x-4"
                                >
                                    <Link
                                        href="#about"
                                        className="inline-flex items-center bg-white dark:bg-indigo-600 border-black dark:border-none text-indigo-600 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors duration-300"
                                    >
                                        Learn More
                                        <ArrowDownCircle className="ml-2" />
                                    </Link>
                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center bg-transparent border-2 border-black dark:border-white dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 dark:hover:bg-white/10 transition-colors duration-300"
                                    >
                                        Get in Touch
                                    </Link>
                                    <div className="mt-4 pl-24 space-y-4 items-center justify-center">
                                    <Link
                                        href="/Chrispin Oguna_Curriculum Vitae Lecturer Computer Security_MUT 34 1 2025.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-transparent border-2 border-black dark:border-white dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 dark:hover:bg-white/10 transition-colors duration-300"
                                    >
                                        Get CV
                                    </Link>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative md:block"
                            >
                                <div className="absolute inset-0 bg-gray-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                                <motion.img
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={floatingAnimation.animate.transition}
                                    className="relative w-full max-w-lg mx-auto rounded-lg shadow-l"
                                    src="/chris.png"
                                    alt="Chrispin Oguna"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="relative min-h-screen pt-16 font-montserrat z-10 text-black dark:text-white">
                    <About />
                    <Experience />
                    <Education />
                    <Skills />
                    <Publications />
                    <BlogSection />
                    <Awards />
                    <Volunteering />
                    <Contact />
                </section>

                {showScrollToTop && (
                    <div
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 cursor-pointer p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 z-10"
                        title="Back to Top"
                    >
                        <ArrowUpCircle className="h-8 w-8" />
                    </div>
                )}
            </div>
        </>
    )
}

export default HeroWithNavbar