import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'react-feather';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
};

const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
};

const volunteering = [
    {
        title: "Palindrome Mental Health Services",
        organization: "February 2022 - Present",
        date: "February 2022 - Present",
        description: "As a sponsor and mentor in AA, I share my experience, strength, and hope through daily messages on the Sober app, guiding others on their recovery journey. I emphasize the importance of relying on a Higher Power, embracing the mantra 'Thy will, not our will, be done' to inspire transformation and spiritual growth.",
        link: null
    }
];

export default function Volunteering() {
    return (
        <section id="volunteering" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">Volunteering</h2>
                <div className="flex justify-center">
                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                        {volunteering.map((item, index) => (
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
                                            <h3 className="text-xl font-medium text-slate-700 dark:text-slate-200 line-clamp-2 h-14">{item.title}</h3>
                                        </div>
                                        <div className="flex items-center mb-1">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200">
                                                {item.organization}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-slate-400 dark:text-slate-500">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {item.date}
                                        </div>
                                    </header>
                                    <div className="h-48 overflow-y-auto mb-6">
                                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                                    </div>
                                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
                                        {item.link ? (
                                            <motion.a
                                                href={item.link}
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
            </div>
        </section>
    );
}