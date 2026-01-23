
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
      icon: <FiMail className="w-5 h-5" />,
      title: "Email",
      content: "mr.bilalsaleem2003@gmail.com",
      link: "mailto:mr.bilalsaleem2003@gmail.com"
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Phone",
      content: "+92 3220656582",
      link: "tel:+923220656582"
    },
    {
      icon: <FiMapPin className="w-5 h-5" />,
      title: "Location",
      content: "Islamabad, Pakistan",
      link: "https://maps.google.com"
    }
  ]

  return (
    <section id="contact" className="py-20">
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
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just to say hello
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
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
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{info.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{info.content}</p>
                    </div>
                  </motion.a>
                ))}

                {/* Resume Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">View Full Profile</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Download my resume to see detailed information about my experience, education, and skills.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadResume}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 border border-blue-600"
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
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-medium text-gray-900 dark:text-white">Currently Available</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Open to internships, freelance projects, and full-time opportunities.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors duration-300 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                    >
                      <FiAlertCircle className="mr-2 text-red-600 dark:text-red-400" />
                      <span className="text-sm text-red-700 dark:text-red-400">{error}</span>
                    </motion.div>
                  )}

                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                    >
                      <FiCheckCircle className="mr-2 text-green-600 dark:text-green-400" />
                      <span className="text-sm text-green-700 dark:text-green-400">
                        Message sent successfully!
                      </span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-70 border border-blue-600"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <FiCheckCircle />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                  I'll respond to your message within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}