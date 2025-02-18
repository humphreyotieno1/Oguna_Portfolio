import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Data Communications",
    "Distributed Systems", 
    "BGP Configuration",
    "Operating Systems",
    "Huawei Certification",
    "CCNA",
    "Network Security",
    "ICT Education",
];

// Duplicate the array to create seamless scrolling
const duplicatedSkills = [...skills, ...skills];

export default function Skills() {
    return (
        <section id="skills" className="py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>
                
                {/* Scrolling Container */}
                <div className="relative">
                    <motion.div 
                        className="flex gap-4 flex-nowrap"
                        animate={{
                            x: [0, -1000],
                        }}
                        transition={{
                            x: {
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md flex-shrink-0"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Second row scrolling in opposite direction */}
                    {/* <motion.div 
                        className="flex gap-4 flex-nowrap mt-4"
                        animate={{
                            x: [-1000, 0],
                        }}
                        transition={{
                            x: {
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-md flex-shrink-0"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}