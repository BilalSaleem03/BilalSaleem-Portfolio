// 'use client'

// import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

// export default function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex items-center pt-16">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="md:w-1/2">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
//               Hi, I'm <span className="text-blue-600">Bilal Saleem</span>
//             </h1>
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
//               MERN Stack Developer
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
//               A passionate developer with expertise in building full-stack web applications using modern technologies.
//             </p>
            
//             <div className="flex space-x-4 mb-8">
//               <a
//                 href="https://github.com/BilalSaleem03"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
//                 aria-label="GitHub"
//               >
//                 <FiGithub size={24} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/muhammad-bilal-saleem-a175412a4/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <FiLinkedin size={24} />
//               </a>
//               <a
//                 href="mailto:mr.bilalsaleem2003@gmail.com"
//                 className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
//                 aria-label="Email"
//               >
//                 <FiMail size={24} />
//               </a>
//             </div>

//             <a
//               href="#contact"
//               className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
//             >
//               Contact Me
//             </a>
//           </div>

//           <div className="md:w-1/2 flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80">
//               <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
//                 <img
//                   src="/images/bilal-profile.jpg"
//                   alt="Muhammad Bilal Saleem"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }




'use client'

import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    // Assuming your resume is named "resume.pdf" in the public folder
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
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: <FiLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/muhammad-bilal-saleem-a175412a4/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-700 hover:text-white'
    },
    {
      icon: <FiMail size={20} />,
      href: 'mailto:mr.bilalsaleem2003@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-600 hover:text-white'
    }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-4">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="block">Muhammad</span>
              <span className="text-blue-600 dark:text-blue-400">Bilal Saleem</span>
            </h1>
            
            <div className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              <span className="text-blue-600 dark:text-blue-400">MERN Stack Developer</span> & AI Enthusiast
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              A passionate Computer Science student at COMSATS University, specializing in building full-stack web applications with modern technologies. Currently exploring AI/ML while leading as Operations Manager at IEEE CS.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 bg-white dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 ${link.color} transform hover:-translate-y-1`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <FiMail />
                Contact Me
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700"
                />
                
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <img
                    src="/images/bilal-profile.jpg"
                    alt="Muhammad Bilal Saleem"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <span className="font-bold text-sm">MERN</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  <span className="font-bold text-xs">AI/ML</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}