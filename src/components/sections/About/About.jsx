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
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=450&fit=crop"
          alt="Developer workspace setup"
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
