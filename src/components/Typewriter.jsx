'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Typewriter({ texts, speed = 100, delay = 1000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, speed / 2)
      }
    } else {
      const fullText = texts[currentTextIndex]
      if (currentText === fullText) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1))
        }, speed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isWaiting, currentTextIndex, texts, speed, delay])

  return (
    <div className="h-12">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {currentText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </div>
  )
}