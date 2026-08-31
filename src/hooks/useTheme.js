/**
 * useTheme.js
 *
 * Convenience re-export so components can do:
 *   import { useTheme } from '../hooks/useTheme'
 * instead of reaching into the contexts folder directly.
 */

export { useThemeContext as useTheme } from '../contexts/ThemeContext'
