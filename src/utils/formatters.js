/**
 * formatters.js
 * Pure utility functions for formatting data for display.
 */

/**
 * Formats a Date object or ISO string into a readable date string.
 * @param {Date|string} date
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string} e.g. "January 2024"
 */
export const formatDate = (date, options = { year: 'numeric', month: 'long' }) => {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
}

/**
 * Truncates a string to a maximum length and appends an ellipsis.
 * @param {string} text
 * @param {number} [maxLength=120]
 * @returns {string}
 */
export const truncate = (text, maxLength = 120) => {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

/**
 * Converts a camelCase or PascalCase string to Title Case with spaces.
 * @param {string} str - e.g. "myProjectName"
 * @returns {string} - e.g. "My Project Name"
 */
export const toTitleCase = (str) =>
  str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim()
