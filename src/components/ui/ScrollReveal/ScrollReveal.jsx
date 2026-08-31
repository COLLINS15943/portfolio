/**
 * ScrollReveal.jsx
 *
 * Wrapper component that animates its children into view when they enter
 * the viewport. Uses the useScrollReveal hook under the hood.
 *
 * @prop {'up'|'left'|'right'} direction - Slide direction (default: 'up')
 * @prop {string} className              - Extra classes passed to the wrapper
 *
 * @example
 *   <ScrollReveal direction="left">
 *     <h2>Hello</h2>
 *   </ScrollReveal>
 */

import useScrollReveal from '../../../hooks/useScrollReveal'
import styles          from './ScrollReveal.module.css'
import { cn }          from '../../../utils/helpers'

const DIRECTION_CLASS = {
  up:    styles.revealUp,
  left:  styles.revealLeft,
  right: styles.revealRight,
}

const ScrollReveal = ({ children, direction = 'up', className }) => {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={cn(styles.base, DIRECTION_CLASS[direction], className)}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
