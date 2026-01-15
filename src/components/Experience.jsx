// 'use client'

// const experiences = [
//   {
//     role: 'AI Engineer - Intern',
//     company: 'CitrusBits Private Limited',
//     period: 'July 2025 - Aug 2025',
//     description: [
//       'Worked on backend development using Nest.js and PostgreSQL. ',
//       'Gained practical exposure to Machine Learning (Scikit-learn).',
//       'Explored Deep Learning concepts (TensorFlow) and their applications.',
//     ],
//   },
//   {
//     role: 'Operations Manager',
//     company: 'IEEE CS CUI',
//     period: 'Nov 2024 - Present',
//     description: [
//       'Organized COMPETE\'24, a national level hackathon',
//       'Managed COMSATS Tech Summit (CTS), a national level hackathon',
//     ],
//   },
// ]

// export default function Experience() {
//   return (
//     <section id="experience" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
//             Work <span className="text-blue-600">Experience</span>
//           </h2>

//           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
//             {experiences.map((exp, index) => (
//               <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
//                 <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
//                   </svg>
//                 </div>

//                 <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
//                   <div className="flex items-center justify-between space-x-2 mb-1">
//                     <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.role}</h3>
//                     <time className="font-caveat font-medium text-blue-600">{exp.period}</time>
//                   </div>
//                   <h4 className="text-gray-600 dark:text-gray-400 mb-3">{exp.company}</h4>
//                   <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
//                     {exp.description.map((item, i) => (
//                       <li key={i}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    role: 'AI Engineer - Intern',
    company: 'CitrusBits Private Limited',
    period: 'July 2025 - Aug 2025',
    location: 'Remote',
    description: [
      'Worked on backend development using Nest.js and PostgreSQL',
      'Gained practical exposure to Machine Learning (Scikit-learn)',
      'Explored Deep Learning concepts (TensorFlow) and their applications',
    ],
  },
  {
    role: 'Operations Manager',
    company: 'IEEE CS CUI',
    period: 'Nov 2024 - Present',
    location: 'COMSATS University',
    description: [
      'Organized COMPETE\'24, a national level hackathon',
      'Managed COMSATS Tech Summit (CTS), a national level hackathon',
      'Led team coordination and operational improvements',
    ],
  },
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and key roles in the tech industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line - centered properly */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex ${
                    index % 2 === 0 
                      ? 'md:justify-end' 
                      : 'md:justify-start'
                  }`}
                >
                  {/* Timeline dot - centered on line */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10 -ml-1.5"></div>
                  
                  {/* Experience card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'} ml-12 md:ml-0`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      {/* Header - Fixed alignment */}
                      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                        <div className="space-y-4">
                          {/* Role and Company */}
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <FiBriefcase className="w-4 h-4 flex-shrink-0" />
                              <span className="text-sm">{exp.company}</span>
                            </div>
                          </div>
                          
                          {/* Period and Location - Better alignment */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                              <FiCalendar className="w-4 h-4 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium">Duration</p>
                                <p className="text-sm">{exp.period}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500">
                              <FiMapPin className="w-4 h-4 flex-shrink-0" />
                              <div>
                                <p className="text-xs font-medium">Location</p>
                                <p className="text-sm">{exp.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-4">Responsibilities & Achievements</h4>
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 mt-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-400">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech stack tags */}
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Technologies & Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.role.includes('AI Engineer') ? (
                              <>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Nest.js</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">PostgreSQL</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Scikit-learn</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">TensorFlow</span>
                              </>
                            ) : (
                              <>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Leadership</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Event Management</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Team Coordination</span>
                                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-800">Problem Solving</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-800">
              <span className="text-lg">🎯</span>
              <div>
                <p className="font-medium">Open to new opportunities</p>
                <p className="text-sm text-blue-600 dark:text-blue-500">Seeking roles in Full Stack Development & AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}