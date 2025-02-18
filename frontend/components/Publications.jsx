const publications = [
    {
        title: "Social network recruitment technology adoption framework in higher educational institutions in Kenya",
        authors: "Chrispin Oguna, George Raburu, Amos Omamo, and Satwinder S. Rupra",
        year: 2023,
        description:
            "The success of the organization depends on effective recruitment and selection system. Looking at the Kenyan labour market, there are still unfilled vacancies and organisations have problems regarding their staffing. Recruitment by Social Networking Sites is an aspect of a new topic and there is a lack of studies about it.",
        link: "https://journals.must.ac.ke/index.php/AJSTSS/article/download/120/115/299",
    },
]

export default function Publications() {
    return (
        <section id="publications" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">Publications</h2>
                {publications.map((pub, index) => (
                    <div key={index} className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{pub.year}</p>
                        <p className="mb-4">{pub.description}</p>
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Read Publication
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

