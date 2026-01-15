// 'use client'

// import { FiGithub, FiExternalLink } from 'react-icons/fi'

// const projects = [
//   {
//     title: 'Car Dealership Platform',
//     description: 'Built a full-stack dealership platform where users can post and purchase vehicles through a verified sales agent.',
//     technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
//     githubLink: 'https://github.com/BilalSaleem03/Car-Dealership-MongoDB',
//     liveLink: '#',
//   },
//   {
//     title: 'Resorts Web Application',
//     description: 'Developed a resort listing platform with user reviews, leveraging third-party APIs for enhanced functionality.',
//     technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Third Party API'],
//     githubLink: 'https://github.com/BilalSaleem03/WanderLust',
//     liveLink: '#',
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div>
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             My <span className="text-blue-600">Projects</span>
//           </h2>
//           <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//             Here are some of the projects I've worked on recently.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {projects.map((project, index) => (
//               <div 
//                 key={index}
//                 className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
//                   <span className="text-white text-2xl font-bold">{project.title}</span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech, i) => (
//                       <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex space-x-4">
//                     <a
//                       href={project.githubLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
//                     >
//                       <FiGithub className="mr-2" /> Code
//                     </a>
//                     <a
//                       href={project.liveLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                     >
//                       <FiExternalLink className="mr-2" /> Live Demo
//                     </a>
//                   </div>
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
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Car Dealership Platform',
    description: 'Built a full-stack dealership platform where users can post and purchase vehicles through a verified sales agent.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux'],
    githubLink: 'https://github.com/BilalSaleem03/Car-Dealership-MongoDB',
    liveLink: '#',
  },
  {
    title: 'Resorts Web Application',
    description: 'Developed a resort listing platform with user reviews, leveraging third-party APIs for enhanced functionality.',
    technologies: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'API Integration'],
    githubLink: 'https://github.com/BilalSaleem03/WanderLust',
    liveLink: '#',
  },
]

export default function Projects() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work showcasing technical expertise and problem-solving
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                  {/* Project header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="p-6">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors duration-300 border border-gray-900"
                      >
                        <FiGithub />
                        View Code
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      >
                        <FiExternalLink />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* GitHub link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/BilalSaleem03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <FiGithub />
              View More Projects on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}