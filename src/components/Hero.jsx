

'use client'

import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Muhammad_Bilal_Saleem_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      href: 'https://github.com/BilalSaleem03',
      label: 'GitHub'
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/muhammad-bilal-saleem-a175412a4/',
      label: 'LinkedIn'
    },
    {
      icon: <FiMail size={20} />,
      href: 'mailto:mr.bilalsaleem2003@gmail.com',
      label: 'Email'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">
                MERN Stack Developer
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Muhammad <span className="text-blue-600">Bilal Saleem</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
              Computer Science student at COMSATS University specializing in full-stack web development. 
              Passionate about building scalable applications with modern technologies and exploring AI/ML.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-2.5 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 border border-blue-600"
              >
                Get in Touch
                <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={downloadResume}
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full border border-gray-300 dark:border-gray-700"></div>
                
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  <img
                    src="/images/bilal-profile.jpg"
                    alt="Muhammad Bilal Saleem"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Simple floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white"
                >
                  <span className="font-bold text-sm">MERN</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-2 -left-2 w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-white"
                >
                  <span className="font-bold text-xs">AI</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}