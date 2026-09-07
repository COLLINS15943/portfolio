/**
 * AboutContent.jsx
 *
 * Text column of the About section.
 * Content is exactly as written in the original About.jsx — nothing added.
 */

import ScrollReveal from '../../ui/ScrollReveal'
import styles       from './About.module.css'

const AboutContent = () => (
  <ScrollReveal direction="right" className={styles.content}>

    <span className="label">About Me</span>

    <h2 className={styles.title}>
      Building software that solves real problems.
    </h2>

    <p className={styles.description}>
      I'm a software developer based in Accra, Ghana, building web applications with React, Next.js, and JavaScript.
      I've worked on healthcare platforms that automate patient care workflows across Africa, as well as e-commerce apps with localized payment integrations.
      I focus on writing clean, reliable code and delivering fast, accessible web experiences.
    </p>

  </ScrollReveal>
)

export default AboutContent
