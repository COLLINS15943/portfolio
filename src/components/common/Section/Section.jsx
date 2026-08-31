/**
 * Section.jsx
 *
 * Semantic <section> wrapper with consistent vertical padding and
 * an optional alternating background for visual rhythm between sections.
 */

import Container from '../Container'
import styles from './Section.module.css'
import { cn } from '../../../utils/helpers'

const Section = ({ children, id, alternate = false, className, ...rest }) => (
  <section
    id={id}
    className={cn(styles.section, alternate && styles.alternate, className)}
    {...rest}
  >
    <Container>{children}</Container>
  </section>
)

export default Section
