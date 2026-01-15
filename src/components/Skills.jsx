'use client'

import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiCpu, FiTool } from 'react-icons/fi'

const skillCategories = [
  {
    name: "Frontend Development",
    icon: <FiCode className="w-5 h-5" />,
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 60 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Redux', level: 65 },
      { name: 'HTML/CSS', level: 85 },
    ]
  },
  {
    name: "Backend Development",
    icon: <FiServer className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Nest.js', level: 90 },
      { name: 'REST APIs', level: 80 },
      { name: 'JWT', level: 90 },
      { name: 'Socket.io', level: 70 },
    ]
  },
  {
    name: "Databases",
    icon: <FiDatabase className="w-5 h-5" />,
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL', level: 70 },
      { name: 'Mongoose', level: 75 },
    ]
  },
  {
    name: "AI/ML & Data Science",
    icon: <FiCpu className="w-5 h-5" />,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Pandas', level: 80 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'TensorFlow', level: 75 },
      { name: 'Matplotlib', level: 70 },
    ]
  },
  {
    name: "Tools & Others",
    icon: <FiTool className="w-5 h-5" />,
    skills: [
      { name: 'Git', level: 65 },
      { name: 'Postman', level: 75 },
      { name: 'Docker', level: 60 },
      { name: 'Java', level: 70 },
      { name: 'Bootstrap', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
    ]
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20">
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
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and frameworks I work with, organized by category
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="h-1.5 rounded-full bg-blue-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 max-w-2xl">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Continuously learning and expanding my skillset with new technologies and best practices.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}