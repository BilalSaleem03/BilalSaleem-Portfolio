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
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

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
    color: 'from-blue-500 to-blue-600',
    icon: <FiBriefcase />
  },
  {
    role: 'Operations Manager',
    company: 'IEEE CS CUI',
    period: 'Nov 2024 - Present',
    location: 'COMSATS University',
    description: [
      'Organized COMPETE\'24, a national level hackathon',
      'Managed COMSATS Tech Summit (CTS), a national level hackathon',
      'Led a team of 15+ members for tech event coordination',
      'Improved operational efficiency by 30% through process optimization',
    ],
    color: 'from-purple-500 to-purple-600',
    icon: <FiAward />
  }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and hands-on experience in the tech industry
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12 lg:space-y-0"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative lg:w-1/2 ${index % 2 === 0 ? 'lg:ml-0 lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}
                >
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className={`hidden lg:block absolute top-6 ${index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'} w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                    
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                      {/* Header with gradient */}
                      <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                              {exp.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                          </div>
                          <div className="hidden sm:block">
                            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          <div className="flex items-center gap-2">
                            <FiBriefcase className="w-4 h-4 opacity-80" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiMapPin className="w-4 h-4 opacity-80" />
                            <span className="opacity-90">{exp.location}</span>
                          </div>
                          <div className="sm:hidden flex items-center gap-2">
                            <FiCalendar className="w-4 h-4 opacity-80" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Responsibilities & Achievements</h4>
                        <ul className="space-y-3">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></div>
                              <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech stack tags */}
                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.role.includes('AI Engineer') ? (
                              <>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">Nest.js</span>
                                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">PostgreSQL</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">Scikit-learn</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">TensorFlow</span>
                              </>
                            ) : (
                              <>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">Leadership</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">Event Management</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">Team Coordination</span>
                                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm rounded-full">Problem Solving</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg">
              <span>🎯</span>
              <span>Seeking new opportunities in Full Stack Development & AI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}