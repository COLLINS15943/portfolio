/**
 * Navigation.jsx
 *
 * Desktop nav link list. Reads link definitions from the constants file
 * so adding a new section only requires one edit in navigation.js.
 */

import { NAV_LINKS } from '../../../assets/constants/navigation'
import { scrollToSection } from '../../../utils/helpers'
import styles from './Header.module.css'

const Navigation = ({ onLinkClick }) => (
  <nav className={styles.nav} aria-label="Main navigation">
    {NAV_LINKS.map(({ label, id }) => (
      <a
        key={label}
        href={id ? `#${id}` : '#'}
        onClick={(e) => {
          e.preventDefault()
          scrollToSection(id)
          onLinkClick?.()
        }}
      >
        {label}
      </a>
    ))}
  </nav>
)

export default Navigation
