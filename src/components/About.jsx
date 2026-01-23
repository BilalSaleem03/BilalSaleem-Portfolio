

'use client'

import { motion } from 'framer-motion'
import { FiBook, FiMapPin, FiGlobe, FiUsers, FiTarget, FiAward } from 'react-icons/fi'

export default function About() {
  const cards = [
    {
      icon: <FiBook className="w-5 h-5" />,
      title: "Education",
      content: (
        <>
          <span className="font-medium">Bachelor of Computer Sciences</span><br />
          COMSATS University Islamabad<br />
          2023 - 2027
        </>
      )
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Contact",
      content: (
        <>
          <span className="font-medium">Phone:</span> +92 3220656582<br />
          <span className="font-medium">Email:</span> mr.bilalsaleem2003@gmail.com<br />
          <span className="font-medium">Address:</span> Islamabad, Pakistan
        </>
      )
    },
    {
      icon: <FiGlobe className="w-5 h-5" />,
      title: "Languages",
      content: (
        <>
          <span className="font-medium">English</span> - Professional<br />
          <span className="font-medium">Urdu</span> - Native
        </>
      )
    }
  ]

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
    <section id="about" className="py-20">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my background, expertise, and professional journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FiUsers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Leadership & Teamwork</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      As the <span className="font-medium">Operations Manager of IEEE Computer Society</span>, 
                      I lead teams to organize tech events and hackathons, developing strong leadership and organizational skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FiTarget className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Expertise</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Specializing in <span className="font-medium">MERN Stack development</span>, with hands-on 
                      experience in AI/ML through internships. Passionate about building scalable applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <FiAward className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Always eager to learn new technologies and methodologies while maintaining 
                      expertise in full-stack web development and exploring AI advancements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Background</h3>
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    A third-year Computer Science student at COMSATS University, Islamabad, with a strong passion for 
                    <span className="font-medium text-blue-600 dark:text-blue-400"> MERN Stack development</span> 
                    and modern web technologies.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Through my role at IEEE Computer Society, I've honed <span className="font-medium">leadership, 
                    event management, and problem-solving skills</span> while actively contributing to various 
                    tech initiatives and community engagements.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    My dedication to technology and continuous learning drives me to innovate and contribute 
                    meaningfully to every project I undertake.
                  </p>
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
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}