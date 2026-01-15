// 'use client'

// import { useState } from 'react'
// import { FiSend, FiCheckCircle , FiAlertCircle} from 'react-icons/fi'

// export default function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     })
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [isSuccess, setIsSuccess] = useState(false)
//     const [error, setError] = useState(null)

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     //   const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     setIsSubmitting(true)
//     //     console.log(formData)

//     //     // Simulate form submission
//     //     setTimeout(() => {
//     //       setIsSubmitting(false)
//     //       setIsSuccess(true)
//     //       setFormData({ name: '', email: '', message: '' })

//     //       // Reset success message after 3 seconds
//     //       setTimeout(() => setIsSuccess(false), 3000)
//     //     }, 1500)
//     //   }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         setIsSubmitting(true)
//         setError(null)

//         try {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             })

//             if (!response.ok) {
//                 throw new Error('Failed to send message')
//             }

//             setIsSuccess(true)
//             setFormData({ name: '', email: '', message: '' })

//             // Reset success message after 3 seconds
//             setTimeout(() => setIsSuccess(false), 3000)
//         } catch (err) {
//             setError(err.message)
//         } finally {
//             setIsSubmitting(false)
//         }
//     }

//     return (
//         <section id="contact" className="py-20">
//             <div className="container mx-auto px-4">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
//                         Get In <span className="text-blue-600">Touch</span>
//                     </h2>
//                     <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//                         Have a project in mind or want to collaborate? Feel free to reach out!
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                         <div className="space-y-6">
//                             <div className="flex items-start space-x-4">
//                                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
//                                     <p className="text-gray-600 dark:text-gray-400">mr.bilalsaleem2003@gmail.com</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
//                                     <p className="text-gray-600 dark:text-gray-400">+92 3220656582</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-start space-x-4">
//                                 <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
//                                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                                     </svg>
//                                 </div>
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
//                                     <p className="text-gray-600 dark:text-gray-400">House #266 Margalla Town, Islamabad</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div>
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                         Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                         Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                         Message
//                                     </label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         rows="4"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         required
//                                         className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
//                                     ></textarea>
//                                 </div>

//                                 {/* <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
//                                 >
//                                     {isSubmitting ? (
//                                         'Sending...'
//                                     ) : isSuccess ? (
//                                         <>
//                                             <FiCheckCircle className="mr-2" /> Message Sent!
//                                         </>
//                                     ) : (
//                                         <>
//                                             <FiSend className="mr-2" /> Send Message
//                                         </>
//                                     )}
//                                 </button> */}
//                                 {error && (
//                                     <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
//                                         <FiAlertCircle className="mr-2" />
//                                         <span>{error}</span>
//                                     </div>
//                                 )}

//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-70"
//                                 >
//                                     {isSubmitting ? (
//                                         'Sending...'
//                                     ) : isSuccess ? (
//                                         <>
//                                             <FiCheckCircle className="mr-2" /> Message Sent!
//                                         </>
//                                     ) : (
//                                         <>
//                                             <FiSend className="mr-2" /> Send Message
//                                         </>
//                                     )}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }




'use client'

import { useState } from 'react'
import { FiSend, FiCheckCircle, FiAlertCircle, FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Muhammad_Bilal_Saleem_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      content: "mr.bilalsaleem2003@gmail.com",
      color: "from-blue-500 to-blue-600",
      link: "mailto:mr.bilalsaleem2003@gmail.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      content: "+92 3220656582",
      color: "from-purple-500 to-purple-600",
      link: "tel:+923220656582"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      content: "House #266 Margalla Town, Islamabad",
      color: "from-green-500 to-green-600",
      link: "https://maps.google.com"
    }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{info.content}</p>
                    </div>
                  </motion.a>
                ))}

                {/* Resume Download Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Want to know more?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Download my resume to see my complete work experience, education, and skills.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadResume}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    <FiDownload />
                    Download Resume
                  </motion.button>
                </motion.div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-medium text-green-800 dark:text-green-400">Available for opportunities</span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-500 mt-2">
                    Currently open to internships, freelance projects, and collaborations.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></motion.textarea>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <FiAlertCircle className="mr-2 text-red-600 dark:text-red-400" />
                      <span className="text-red-700 dark:text-red-400">{error}</span>
                    </motion.div>
                  )}

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                    >
                      <FiCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-400">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <FiCheckCircle className="mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FiSend className="mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}