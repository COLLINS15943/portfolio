/**
 * navigation.js
 * Central source of truth for all nav link definitions.
 * Used by Header/Navigation and MobileMenu.
 */

/** @type {{ label: string, id: string | null }[]} */
export const NAV_LINKS = [
  { label: 'Home',     id: null       }, // null → scroll to top
  { label: 'About',    id: 'about'    },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact',  id: 'contact'  },
]
