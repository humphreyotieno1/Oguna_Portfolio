const experiences = [
    {
      title: "IT Tutorial Fellow",
      company: "Zetech University",
      date: "August 2024 - Current",
      description: [
        "Deliver lectures and tutorials in IT subjects, including data communication and networking, to undergraduate students.",
        "Support student learning through mentorship, assessments, and development of course materials.",
        "Assist in research activities and collaborate with faculty to ensure alignment with academic standards and industry practices.",
      ],
    },
    {
      title: "Huawei Certified Academy Instructor",
      company: "University of Nairobi Academy Support Center",
      date: "November 2020 - Current",
      description: [
        "Deliver comprehensive training on advanced networking concepts, including routing, switching, and network security, to students preparing for HCIA and HCIP certifications.",
        "Facilitate hands-on labs and workshops, ensuring alignment with Huawei standards and practical readiness for Datacomm certification.",
      ],
    },
    {
      title: "Part-Time ICT Lecturer",
      company: "Multimedia University of Kenya",
      date: "January 2024 - Current",
      description: [
        "Teach ICT courses, focusing on data communication and networking, while implementing strategies that increased student pass rates by 15% over two semesters.",
        "Mentor students towards achieving industry certifications, resulting in a 20% increase in HCIA and HCIP certified graduates.",
      ],
    },
    {
      title: "Assistant Lecturer",
      company: "KCA University",
      date: "September 2004 - September 2018",
      description: [
        "Teach ICT courses, focusing on data communication and networking, while implementing strategies that increased student pass rates by 15% over two semesters.",
        "Mentor students towards achieving industry certifications, resulting in an 80% increase in CCNA and Cybersecurity certified graduates.",
      ],
    },
  ]
  
  export default function Experience() {
    return (
      <section id="experience" className="py-20 text-black dark:text-white font-montserrat">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative pl-8 border-l-2 border-indigo-500">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1"></div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-lg font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.date}</p>
                <ul className="list-disc list-inside">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  