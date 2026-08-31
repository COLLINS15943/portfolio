/**
 * MobileMenu.jsx
 *
 * Slide-down drawer shown on mobile (≤ 768px).
 * Rendered as a sibling to <header> so it can sit above the page content
 * without affecting the header's height or stacking context.
 */

import { NAV_LINKS } from '../../../assets/constants/navigation'
import { scrollToSection } from '../../../utils/helpers'
import styles from './Header.module.css'

const MobileMenu = ({ isOpen, onClose }) => (
  <>
    {/* Slide-down nav drawer */}
    <nav
      className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      {NAV_LINKS.map(({ label, id }) => (
        <a
          key={label}
          href={id ? `#${id}` : '#'}
          onClick={(e) => {
            e.preventDefault()
            scrollToSection(id)
            onClose()
          }}
        >
          {label}
        </a>
      ))}
    </nav>

    {/* Backdrop overlay */}
    {isOpen && (
      <div
        className={styles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />
    )}
  </>
)

export default MobileMenu
