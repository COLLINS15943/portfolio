/**
 * Button.jsx
 *
 * Reusable button / anchor component with three visual variants:
 *   - "primary"  → filled brand colour
 *   - "outline"  → bordered, transparent background
 *   - "ghost"    → no border, subtle hover background
 *
 * When `href` is provided the component renders an <a> tag instead of <button>.
 */

import styles from './Button.module.css'
import { cn } from '../../../utils/helpers'

const Button = ({
  children,
  variant   = 'primary',
  size      = 'md',
  href,
  className,
  disabled  = false,
  type      = 'button',
  onClick,
  ...rest
}) => {
  const classes = cn(
    styles.btn,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
