/**
 * TechStack.jsx
 *
 * Displays the developer's technology stack as a row of icon tiles.
 * Data comes from the constants file — add a new tech by editing techStack.js.
 */

import { TECH_STACK }  from '../../../assets/constants/techStack'
import TechIcon        from './TechIcon'
import styles          from './TechStack.module.css'

const TechStack = () => (
  <div className={styles.wrapper}>
    <span className={styles.label}>Tech Stack</span>

    <div className={styles.grid}>
      {TECH_STACK.map((tech) => (
        <TechIcon key={tech.id} {...tech} />
      ))}
    </div>
  </div>
)

export default TechStack
