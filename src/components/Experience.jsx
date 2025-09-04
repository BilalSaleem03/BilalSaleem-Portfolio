'use client'

const experiences = [
  {
    role: 'AI Engineer - Intern',
    company: 'CitrusBits Private Limited',
    period: 'July 2025 - Aug 2025',
    description: [
      'Worked on backend development using Nest.js and PostgreSQL. ',
      'Gained practical exposure to Machine Learning (Scikit-learn).',
      'Explored Deep Learning concepts (TensorFlow) and their applications.',
    ],
  },
  {
    role: 'Operations Manager',
    company: 'IEEE CS CUI',
    period: 'Nov 2024 - Present',
    description: [
      'Organized COMPETE\'24, a national level hackathon',
      'Managed COMSATS Tech Summit (CTS), a national level hackathon',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Work <span className="text-blue-600">Experience</span>
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>

                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.role}</h3>
                    <time className="font-caveat font-medium text-blue-600">{exp.period}</time>
                  </div>
                  <h4 className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}