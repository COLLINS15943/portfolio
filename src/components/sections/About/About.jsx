/**
 * About.jsx
 *
 * Two-column section: workspace image on the left, AboutContent on the right.
 * Scroll-reveal animations are handled by the ScrollReveal wrapper component.
 */

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import AboutContent from './AboutContent'
import styles       from './About.module.css'

const About = () => (
  <Section id="about">
    <div className={styles.grid}>

      {/* ── Image column ── */}
      <ScrollReveal direction="left" className={styles.imageWrap}>
        <img
          src="/images/about/workspace.jpg"
          alt="Product design and frontend engineering workspace"
          className={styles.image}
          loading="lazy"
          width={600}
          height={450}
        />
      </ScrollReveal>

      {/* ── Text column ── */}
      <AboutContent />

    </div>
  </Section>
)

export default About
