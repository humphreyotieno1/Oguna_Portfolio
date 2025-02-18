import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
    {
        degree: "Master of Science in Information Technology Management",
        institution: "Jaramogi Oginga Odinga University of Science and Technology",
        date: "September 2013 - March 2023",
        website: "https://www.jooust.ac.ke/",
    },
    {
        degree: "Bachelor of Science in Computer Science and Engineering",
        institution: "Maseno University",
        date: "September 1999 - December 2004",
        website: "https://www.maseno.ac.ke/",
    },
    {
        degree: "KCSE",
        institution: "Kericho High School",
        date: "January 1994 - November 1997",
        website: "https://kerichohigh.sc.ke/",
    },
];

const certifications = [
    {
        name: "Huawei Certified ICT Professional (Advanced Routing and Switching)",
        institution: "University of Nairobi",
        date: "March 2023 - August 2023",
        website: "https://www.uonbi.ac.ke/",
    },
    {
        name: "Huawei Certified ICT Associate (Data Communication, Big Data, 5G)",
        institution: "Huawei Kenya",
        date: "February 2020 - August 2022",
        website: "https://e.huawei.com/en/talent/portal/#/",
    },
    {
        name: "Cisco Certified Network Associate - CyberOps",
        institution: "African Advanced Level Telecommunication Institute (AFRALTI)",
        date: "February 2018 - December 2018",
        website: "https://www.afralti.org/",
    },
    {
        name: "Certified ICDL Trainer and Tester (94238)",
        institution: "Kenya College of Communications Technology (MMU)",
        date: "April 2003 - August 2004",
        website: "https://www.mmu.ac.ke/",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
};

const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
};

export default function Education() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section id="education" className="py-20 text-black dark:text-white font-montserrat z-40">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">Education & Certifications</h2>
                
                {/* Education Section - Cards */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="overflow-hidden bg-white dark:bg-slate-800 rounded-lg shadow-md text-slate-500 dark:text-slate-300 shadow-slate-200 dark:shadow-slate-700 flex flex-col h-full"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <header className="mb-4">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200 line-clamp-2 h-14">{edu.degree}</h3>
                                        </div>
                                        <div className="flex items-center mb-1">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                                                {edu.institution}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-400 dark:text-slate-500">
                                            {edu.date}
                                        </div>
                                    </header>
                                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                                        <motion.a
                                            href={edu.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300"
                                            variants={buttonVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            Visit Website
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section - Accordion */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
                    <div className="max-w-6xl mx-auto bg-[#f2f8f6] dark:bg-gray-800 rounded-md divide-y font-[sans-serif]">
                        {certifications.map((cert, index) => (
                            <div key={index} role="accordion" className="transition-all">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full sm:text-lg text-base font-bold text-left p-6 text-gray-800 dark:text-gray-200 flex items-center focus:outline-none"
                                >
                                    <span className="mr-6 text-3xl text-gray-400 font-extrabold max-sm:hidden">{index + 1}</span>
                                    <span className="mr-4">{cert.name}</span>
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 fill-current ml-auto shrink-0"
                                        viewBox="0 0 42 42"
                                        animate={{ rotate: openAccordion === index ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path
                                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                            data-original="#000000"
                                        />
                                    </motion.svg>
                                </button>
                                <AnimatePresence>
                                    {openAccordion === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-6 px-6">
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    <strong>Institution:</strong> {cert.institution}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    <strong>Date:</strong> {cert.date}
                                                </p>
                                                <a
                                                    href={cert.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                                                >
                                                    Visit Website
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}