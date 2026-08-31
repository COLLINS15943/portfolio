/**
 * ProjectFilters.jsx
 *
 * Tag-based filter bar for the Projects section.
 * Clicking a tag shows only projects that include that technology.
 * "All" resets the filter.
 */

import { ALL_TAGS } from '../../../assets/constants/projects'
import styles       from './Projects.module.css'

const ProjectFilters = ({ active, onChange }) => (
  <div className={styles.filters} role="group" aria-label="Filter projects by technology">
    {ALL_TAGS.map((tag) => (
      <button
        key={tag}
        className={`${styles.filterBtn} ${active === tag ? styles.filterActive : ''}`}
        onClick={() => onChange(tag)}
        aria-pressed={active === tag}
      >
        {tag}
      </button>
    ))}
  </div>
)

export default ProjectFilters
