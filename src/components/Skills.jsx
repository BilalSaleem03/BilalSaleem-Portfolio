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

const skills = [
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'Next.js', level: 60, category: 'Frontend' },
  { name: 'Redux', level: 65, category: 'Frontend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Express.js', level: 80, category: 'Backend' },
  { name: 'Nest.js', level: 90, category: 'Backend' },
  { name: 'REST APIs', level: 80, category: 'Backend' },
  { name: 'JWT', level: 90, category: 'Backend' },
  { name: 'MongoDB', level: 75, category: 'Database' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'SQL', level: 70, category: 'Database' },
  { name: 'Python', level: 85, category: 'AI/ML' },
  { name: 'NumPy', level: 80, category: 'AI/ML' },
  { name: 'Pandas', level: 80, category: 'AI/ML' },
  { name: 'Scikit-learn', level: 75, category: 'AI/ML' },
  { name: 'TensorFlow', level: 75, category: 'AI/ML' },
  { name: 'Git', level: 65, category: 'Tools' },
  { name: 'Postman', level: 75, category: 'Tools' },
  { name: 'Matplotlib', level: 70, category: 'Tools' },
  { name: 'Java', level: 70, category: 'Tools' },
]

export default function Skills() {
  const categories = [...new Set(skills.map(skill => skill.category))]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/30">
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
              Technologies and tools I specialize in for building robust applications
            </p>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Skill Categories</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((category, index) => (
                <motion.span
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                >
                  {category}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-2 rounded-full bg-blue-600"
                  />
                </div>
                
                <div className="mt-2 flex justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{skill.category}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 60 ? 'Intermediate' : 'Basic'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


