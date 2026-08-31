/**
 * Header.jsx
 *
 * Fixed glassmorphic navigation bar.
 * Delegates nav links to Navigation (desktop) and MobileMenu (mobile).
 * Reads theme state from ThemeContext — no prop drilling needed.
 */

import { useState, useEffect } from 'react'
import { HiMenu, HiX }        from 'react-icons/hi'

import Navigation              from './Navigation'
import MobileMenu              from './MobileMenu'
import ThemeToggle             from '../../ui/ThemeToggle'
import { scrollToSection }     from '../../../utils/helpers'
import styles                  from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Elevate the bar once user scrolls past 20 px
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Auto-close drawer when viewport widens to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setIsMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <button
            className={styles.logo}
            onClick={() => scrollToSection(null)}
            aria-label="Scroll to top"
          >
            cadsix
          </button>

          {/* Desktop nav + theme toggle */}
          <div className={styles.desktopControls}>
            <Navigation onLinkClick={closeMenu} />
            <ThemeToggle />
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className={styles.mobileControls}>
            <ThemeToggle />
            <button
              className={styles.hamburger}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Header
