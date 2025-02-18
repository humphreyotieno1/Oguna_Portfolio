import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        date: "23/07/2024",
        type: "Online",
        title: "Mental health and substance Use Disorders",
        subtitle: "Mental Health challenges among University Students",
        link: "https://www.issup.net/",
    },
    {
        date: "13/04/2023",
        type: "Online", 
        title: "Developing the addiction workforce in Africa",
        subtitle: "Progress and Issues on workforce",
        link: "https://www.issup.net/",
    },
    {
        date: "25/04/2023",
        type: "Webinar",
        title: "Building Resilience and Bouncing Back",
        subtitle: "The PEER perspective",
        link: "https://www.issup.net/",
    },
    {
        date: "17/11/2021",
        type: "Webinar",
        title: "Ethical Challenges in Addiction Counseling",
        subtitle: "",
        link: "https://www.hazeldenbettyford.org/",
    }
];

export default function BlogSection() {
    return (
        <div className="text-black dark:text-white sm:px-6 px-4 py-12 font-montserrat" id="blog">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl text-center justify-center font-extrabold font-montserrat inline-block">
                        CONFERENCES AND SEMINARS
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 max-md:max-w-lg mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer rounded overflow-hidden group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div>
                                <span className="text-sm block mb-2">
                                    {post.date} - {post.type}
                                </span>
                                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-all">
                                    {post.title}
                                </h3>
                                <div className="mt-4">
                                    <p className="text-sm">
                                        {post.subtitle}
                                    </p>
                                </div>
                            </div>
                            <hr className="my-5 border-gray-300" />
                            <motion.div 
                                className="flex flex-wrap items-center gap-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <a 
                                    href={post.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs text-blue-500 hover:text-blue-700 font-semibold"
                                >
                                    READ MORE →
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}