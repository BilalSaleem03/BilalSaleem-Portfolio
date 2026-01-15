// 'use client'

// const skills = [
//   { name: 'React', level: 80 },
//   { name: 'Next js', level: 60 },
//   { name: 'Redux', level: 65 },
//   { name: 'Nest js', level: 90 },
//   { name: 'Node.js', level: 85 },
//   { name: 'Express.js', level: 80 },
//   { name: 'REST APIs', level: 80 },
//   { name: 'PostgreSQL', level: 80 },
//   { name: 'MongoDB', level: 75 },
//   { name: 'SQL', level: 70 },
//   { name: 'JavaScript', level: 90 },
//   { name: 'TypeScript', level: 90 },
//   { name: 'Python', level: 85 },
//   { name: 'Numpy', level: 80 },
//   { name: 'Pandas', level: 80 },
//   { name: 'Matplotlib', level: 70 },
//   { name: 'Scikit-learn', level: 75 },
//   { name: 'Tensorflow', level: 75 },
//   { name: 'Java', level: 70 },
//   { name: 'JWT', level: 90 },
//   { name: 'Git', level: 65 },
//   { name: 'Postman', level: 75 },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div>
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
//             My <span className="text-blue-600">Skills</span>
//           </h2>
//           <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//             Here are the technologies I work with and my proficiency level in each.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {skills.map((skill, index) => (
//               <div 
//                 key={index}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex justify-between items-center mb-2">
//                   <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
//                   <span className="text-sm text-blue-600">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//                   <div 
//                     className="h-2.5 rounded-full bg-blue-600"
//                     style={{ width: `${skill.level}%` }}
//                   />
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
import { FiCode, FiDatabase, FiServer, FiCpu, FiTool } from 'react-icons/fi'

const skills = [
  { 
    category: "Frontend",
    icon: <FiCode className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: 'React', level: 80 },
      { name: 'Next.js', level: 60 },
      { name: 'Redux', level: 65 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 90 },
    ]
  },
  { 
    category: "Backend",
    icon: <FiServer className="w-5 h-5" />,
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Nest.js', level: 90 },
      { name: 'REST APIs', level: 80 },
      { name: 'JWT', level: 90 },
    ]
  },
  { 
    category: "Database",
    icon: <FiDatabase className="w-5 h-5" />,
    color: "from-green-500 to-green-600",
    skills: [
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQL', level: 70 },
    ]
  },
  { 
    category: "AI/ML",
    icon: <FiCpu className="w-5 h-5" />,
    color: "from-pink-500 to-pink-600",
    skills: [
      { name: 'Python', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Pandas', level: 80 },
      { name: 'Scikit-learn', level: 75 },
      { name: 'TensorFlow', level: 75 },
    ]
  },
  { 
    category: "Tools",
    icon: <FiTool className="w-5 h-5" />,
    color: "from-orange-500 to-orange-600",
    skills: [
      { name: 'Git', level: 65 },
      { name: 'Postman', level: 75 },
      { name: 'Matplotlib', level: 70 },
      { name: 'Java', level: 70 },
    ]
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


