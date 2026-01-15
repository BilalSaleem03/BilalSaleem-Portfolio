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
import { FiGithub, FiExternalLink, FiCode, FiServer, FiDatabase } from 'react-icons/fi'

const projects = [
  {
    title: 'Car Dealership Platform',
    description: 'A full-stack dealership platform where users can post and purchase vehicles through verified sales agents. Features include user authentication, vehicle listing management, and secure payment integration.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux'],
    githubLink: 'https://github.com/BilalSaleem03/Car-Dealership-MongoDB',
    liveLink: '#',
    color: 'from-blue-500 to-blue-600',
    icon: <FiDatabase />
  },
  {
    title: 'Resorts Web Application',
    description: 'A comprehensive resort listing platform with user reviews and ratings. Integrated third-party APIs for location services and payment processing. Implemented responsive design and optimized performance.',
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'Third Party API'],
    githubLink: 'https://github.com/BilalSaleem03/WanderLust',
    liveLink: '#',
    color: 'from-purple-500 to-purple-600',
    icon: <FiServer />
  }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents unique challenges and solutions.
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
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
                {/* Project header with gradient */}
                <div className={`relative h-48 bg-gradient-to-r ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Floating tech badges */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies used */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <FiCode className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm rounded-full hover:scale-105 transition-transform"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors"
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
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
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

        {/* More projects indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/BilalSaleem03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
          >
            <FiGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}