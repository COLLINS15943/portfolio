/**
 * Typewriter.jsx
 *
 * Animates a string character-by-character. Shows a blinking cursor
 * while typing; cursor fades out after the full text is displayed.
 *
 * @prop {string}  text        - The full string to type out.
 * @prop {number}  [speed=38]  - Milliseconds per character.
 * @prop {string}  [className] - Optional CSS class on the wrapper span.
 */

import { useState, useEffect } from 'react'
import styles from './Typewriter.module.css'

const Typewriter = ({ text = '', speed = 38, className }) => {
  const [displayed, setDisplayed] = useState('')
  const [index,     setIndex]     = useState(0)
  const isDone = index >= text.length

  useEffect(() => {
    if (isDone) return
    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text[index])
      setIndex((prev) => prev + 1)
    }, speed)
    return () => clearTimeout(timer)
  }, [index, text, speed, isDone])

  return (
    <span className={className}>
      {displayed}
      <span
        className={`${styles.cursor} ${isDone ? styles.cursorDone : ''}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  )
}

export default Typewriter
