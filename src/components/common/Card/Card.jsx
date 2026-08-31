/**
 * Card.jsx
 *
 * Generic glassmorphic card surface used by ProjectCard, stat tiles, etc.
 * Accepts an optional `hoverable` prop to enable lift-on-hover behaviour.
 */

import styles from './Card.module.css'
import { cn } from '../../../utils/helpers'

const Card = ({ children, className, hoverable = false, ...rest }) => (
  <div
    className={cn(styles.card, hoverable && styles.hoverable, className)}
    {...rest}
  >
    {children}
  </div>
)

export default Card
