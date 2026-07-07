
'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar, FiCode } from 'react-icons/fi'

const projects = [
  {
    title: 'Car Dealership Platform',
    description: 'Built a full-stack e-commerce marketplace allowing users to securely list, browse, and purchase vehicles via verified agent tiers. Developed robust user authentication using JWT and built scalable CRUD operations for dynamic vehicle inventory management.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux'],
    githubLink: 'https://github.com/BilalSaleem03/Car-Dealership-MongoDB',
    liveLink: 'https://autonexus-nu.vercel.app/',
    features: [
      'User authentication & authorization',
      'Vehicle listing management',
      'Search & filter functionality',
      'Secure payment integration'
    ]
  },
  {
    title: 'Resorts Web Application',
    description: 'Architected a responsive full-stack listing platform enabling users to seamlessly browse dynamic resort properties, read detailed reviews, and submit verified user feedback. Integrated third-party APIs to fetch and render real-time external data, enriching the user experience with accurate localization or pricing details. Designed a structured MongoDB database schema to efficiently manage relational-like data models for user accounts, reviews, and resort inventory',
    technologies: ['JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    githubLink: 'https://github.com/BilalSaleem03/WanderLust',
    liveLink: 'https://wanderlust-s7r9.onrender.com/listing',
    features: [
      'Resort search & booking',
      'User review system',
      'Third-party API integration',
      'Responsive design'
    ]
  },
  {
    title: 'Clinical Appointment System',
    description: 'Designed a secure backend system handling clinical scheduling, patient records, and doctor workflows. Integrated Google Calendar API via OAuth 2.0 to automate real-time appointment syncing and minimize schedule conflicts. Implemented automated email notification triggers using Node.js backend queues to streamline patient communication.',
    technologies: ['TypeScript', 'Node.js', 'Nest js', 'PostgreSQL', 'OAuth 2.0', 'Google Calendar API'],
    githubLink: 'https://github.com/BilalSaleem03/Clinical-System-NEST-JS',
    // liveLink: '#',
    features: [
      'Online appointment booking',
      'Doctors,Patients and Admins roles',
      'Google Calendar integration(OAuth)',
      'Email notification system',
      'Data security and integrity'
    ]
  },
  {
    title: 'Agentic AI Knowledge Chatbot ',
    description: ' Architected an autonomous AI Agent using LangGraph to manage complex, multi-turn conversations with robust state management and fallback routing. Implemented a Retrieval-Augmented Generation (RAG) pipeline to anchor LLM responses in custom vector data, minimizing hallucinations. Engineered dynamic tool-calling systems, empowering the agent to programmatically decide when to call local internal utilities versus external APIs.',
    technologies: ['LangGraph', 'Python', 'RAG', 'OpenAI', 'Streamlit'],
    githubLink: 'https://github.com/BilalSaleem03/LangGraph-Practical/tree/main/ChatBot_with_UI',
    // liveLink: '#',
    features: [
      'Multiple independent chats',
      'RAG pipeline for accurate responses',
      'Dynamic tool-calling system',
      'Observability and memory management',
    ]
  },
  {
    title: 'Real-Time Collaborative Chat Application ',
    description: 'Developed a secure chat application supporting standard email/password authentication alongside seamless Google OAuth 2.0 registration. Designed efficient MongoDB schemas to index, store, and seamlessly fetch high-throughput historical chat messages and room metadata. Built responsive React interface modules to synchronize state adjustments instantaneously during heavy, multi-user messaging traffic.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Google OAuth 2.0'],
    githubLink: 'https://github.com/BilalSaleem03/Chat-App-Frontend',
    // liveLink: '#',
    features: [
      'User authentication & authorization',
      'Real-time messaging with Socket.io',
      'Chat room creation and management',
    ]
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
    <section id="projects" className="py-20">
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
              A showcase of my recent work demonstrating technical expertise and problem-solving capabilities
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
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300">
                  {/* Project Header with Blue Accent */}
                  <div className="border-t-4 border-blue-500 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <FiCode className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      </div>
                      
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Features */}
                  <div className="p-6 border-y border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Actions */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors duration-300 border border-gray-900"
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
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 border border-blue-600"
                        >
                          <FiExternalLink />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 max-w-2xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Want to see more?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out my GitHub for more projects, contributions, and code samples.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/BilalSaleem03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors duration-300 border border-gray-900 flex items-center gap-2"
                >
                  <FiGithub />
                  Visit GitHub Profile
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
                >
                  Discuss a Project
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}