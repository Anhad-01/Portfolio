import { useEffect, useState } from 'react'
import { cn } from '../../lib/cn'

export function TypewriterEffect({
  words,
  typingSpeed = 80,
  pauseSpeed = 2000,
  className,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseSpeed)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, pauseSpeed])

  return (
    <span className={cn('relative', className)}>
      <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="animate-pulse ml-0.5 text-neon-cyan">|</span>
    </span>
  )
}