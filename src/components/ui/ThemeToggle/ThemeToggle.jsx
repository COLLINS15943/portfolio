/**
 * ThemeToggle.jsx
 *
 * Sun/Moon icon button. Reads and toggles the theme via ThemeContext —
 * no props needed, works anywhere in the tree.
 */

import { HiSun, HiMoon }    from 'react-icons/hi'
import { useThemeContext }   from '../../../contexts/ThemeContext'
import styles                from './ThemeToggle.module.css'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useThemeContext()

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      type="button"
    >
      {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  )
}

export default ThemeToggle
