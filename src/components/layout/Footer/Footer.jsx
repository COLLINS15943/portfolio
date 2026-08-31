/**
 * Footer.jsx
 *
 * Simple site footer with copyright and a back-to-top link.
 */

import { scrollToSection } from '../../../utils/helpers'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      <p className={styles.copy}>
        &copy; {CURRENT_YEAR} Collins Agbo. Built with React &amp; Vite.
      </p>

      <button
        className={styles.backToTop}
        onClick={() => scrollToSection(null)}
        aria-label="Scroll back to top"
      >
        Back to top ↑
      </button>
    </div>
  </footer>
)

export default Footer
