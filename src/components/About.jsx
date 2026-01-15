// 'use client'

// export default function About() {
//   return (
//     <section id="about" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
//             About <span className="text-blue-600">Me</span>
//           </h2>
          
//           <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
//               A third-year Computer Science student at COMSATS University, Islamabad, with a strong passion for <span className="font-semibold text-blue-600">MERN Stack development</span>.
//             </p>
//             <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
//               As the <span className="font-semibold">Operations Manager of the IEEE Computer Society</span>, I have honed my <span className="font-semibold">leadership, event management, and problem-solving skills</span> while actively contributing to various tech events and volunteer initiatives.
//             </p>
//             <p className="text-lg text-gray-700 dark:text-gray-300">
//               My dedication to technology and community engagement drives me to continuously learn and innovate.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-medium">Bachelor of Computer Sciences</span><br />
//                 COMSATS University Islamabad<br />
//                 2023 - 2027
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Contact</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-medium">Phone:</span> +92 3220656582<br />
//                 <span className="font-medium">Email:</span> mr.bilalsaleem2003@gmail.com<br />
//                 <span className="font-medium">Address:</span> House #266 Margalla Town, Islamabad
//               </p>
//             </div>

//             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Languages</h3>
//               <p className="text-gray-600 dark:text-gray-400">
//                 <span className="font-medium">English</span> - Professional<br />
//                 <span className="font-medium">Urdu</span> - Native
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





'use client'

import { motion } from 'framer-motion'
import { FiBook, FiMapPin, FiGlobe, FiAward, FiUsers, FiTarget } from 'react-icons/fi'

export default function About() {
  const cards = [
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Education",
      content: (
        <>
          <span className="font-medium">Bachelor of Computer Sciences</span><br />
          COMSATS University Islamabad<br />
          2023 - 2027
        </>
      ),
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Contact",
      content: (
        <>
          <span className="font-medium">Phone:</span> +92 3220656582<br />
          <span className="font-medium">Email:</span> mr.bilalsaleem2003@gmail.com<br />
          <span className="font-medium">Address:</span> Islamabad, Pakistan
        </>
      ),
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Languages",
      content: (
        <>
          <span className="font-medium">English</span> - Professional<br />
          <span className="font-medium">Urdu</span> - Native<br />
          <span className="font-medium">Punjabi</span> - Native
        </>
      ),
      gradient: "from-green-500 to-green-600"
    }
  ]

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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my background, skills, and passions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <FiUsers className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Leadership & Teamwork</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    As the <span className="font-semibold text-blue-600 dark:text-blue-400">Operations Manager of IEEE Computer Society</span>, I lead a team of passionate individuals to organize tech events and hackathons, developing strong leadership and organizational skills.
                  </p>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                      <FiTarget className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Expertise</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Specializing in <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack development</span>, with hands-on experience in AI/ML through internships at CitrusBits. Passionate about building scalable web applications and exploring cutting-edge technologies.
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                      <FiAward className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Continuous Learning</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
                    Always eager to learn new technologies and methodologies. Currently exploring advanced concepts in AI/ML while maintaining expertise in full-stack web development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Field of Study</span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">University</span>
                      <span className="font-semibold">COMSATS Islamabad</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience Level</span>
                      <span className="font-semibold text-green-600 dark:text-green-400">Intermediate</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Available For</span>
                      <span className="font-semibold">Internships & Projects</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Advanced MERN Stack Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Machine Learning & AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Leadership Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                      <span className="text-gray-700 dark:text-gray-300">Community Building</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}