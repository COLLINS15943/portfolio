/**
 * helpers.js
 * General-purpose utility functions used across the application.
 */

/**
 * Smoothly scrolls to a section by its element ID.
 * Falls back to scrolling to the top when id is null or undefined.
 * @param {string|null} id
 */
export const scrollToSection = (id) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Fires a Google Analytics 4 event safely.
 * Does nothing if gtag is not loaded (e.g. in development or ad-blocked).
 * @param {string} eventName
 * @param {object} [params]
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to the `clsx` package.
 * @param {...(string|undefined|null|false)} classes
 * @returns {string}
 *
 * @example
 *   cn('btn', isActive && 'btn--active', undefined) // → 'btn btn--active'
 */
export const cn = (...classes) => classes.filter(Boolean).join(' ')
