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
      A Software Engineer<br />
      based in Accra, Ghana
    </h2>

    <p className={styles.description}>
      I'm a Software Engineer with hands-on experience building responsive,
      performant web applications using modern technologies including React,
      Next.js, JavaScript, and Supabase. I care about writing clean,
      maintainable code and delivering interfaces that work well and look sharp
      on every device. I enjoy solving real problems through thoughtful
      engineering and always aim to build things that are both functional and
      well-crafted.
    </p>

  </ScrollReveal>
)

export default AboutContent
