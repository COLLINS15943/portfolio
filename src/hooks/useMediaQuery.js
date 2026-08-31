/**
 * useMediaQuery.js
 *
 * Returns true when the given CSS media query string matches.
 * Updates reactively as the viewport changes.
 *
 * @param {string} query - e.g. '(max-width: 768px)'
 * @returns {boolean}
 *
 * @example
 *   const isMobile = useMediaQuery('(max-width: 768px)')
 */

import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const handleChange = (event) => setMatches(event.matches)

    // Use the modern addEventListener API with a fallback
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange)
    } else {
      mediaQueryList.addListener(handleChange) // Safari < 14 fallback
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange)
      } else {
        mediaQueryList.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}

export default useMediaQuery
