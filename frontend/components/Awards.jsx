import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar } from 'lucide-react';

const awards = [
    {
        title: "Worldskills Expert information network cabling 2024",
        organization: "Worldskills International",
        date: "September 16, 2024",
        description:
            "Served as a WorldSkills Expert and Judge for Information Network Cabling at the 2024 competition in Lyon, France, evaluating competitors' technical proficiency and adherence to industry standards. Provided mentorship and assessment, contributing to the development of advanced skills and preparation for global competition benchmarks.",
        link: "https://worldskills.org/",
    },
    {
        title: "Huawei ICT National Competition 2023",
        organization: "Huawei Kenya",
        date: "October 11, 2023",
        description:
            "Led training sessions and mentored participants in the Huawei ICT National Competition 2023, guiding them through advanced networking concepts and practical labs. Evaluated competitors' performance, ensuring alignment with Huawei's standards and fostering readiness for regional and global stages.",
    },
    {
        title: "CCNA Instructor Excellence Award 2012",
        organization: "Cisco Networking Academy",
        date: "August 10, 2012",
        description:
            "Received the CCNA Instructor Excellence Award in 2012 for demonstrating outstanding teaching performance, commitment to student success, and excellence in delivering Cisco's networking curriculum, leading to high pass rates and student engagement in networking concepts.",
        link: "https://www.cisco.com/c/m/en_sg/partners/cisco-networking-academy/index.html",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
    },
    hover: {
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
    }
};

const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
        scale: 1.05,
        transition: { 
            duration: 0.3,
            yoyo: Infinity,
            repeatDelay: 0.5
        }
    }
};

export default function Awards() {
    return (
        <section id="awards" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Honours and Awards</h2>
                <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    {awards.map((award, index) => (
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
                                        <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200 line-clamp-2 h-14">{award.title}</h3>
                                        <Award className="text-indigo-500 dark:text-indigo-400 w-6 h-6 flex-shrink-0 ml-2" />
                                    </div>
                                    <div className="flex items-center mb-1">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                                            {award.organization}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-sm text-slate-400 dark:text-slate-500">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {award.date}
                                    </div>
                                </header>
                                <div className="h-48 overflow-y-auto mb-6">
                                    <p className="text-slate-600 dark:text-slate-400">{award.description}</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                                    {award.link ? (
                                        <motion.a
                                            href={award.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300"
                                            variants={buttonVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            Learn More
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </motion.a>
                                    ) : (
                                        <span className="inline-block h-10"></span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}