/**
 * Contact.jsx
 *
 * Contact section shell: section header + two-column layout
 * (ContactInfo on the left, ContactForm on the right).
 */

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import ContactInfo  from './ContactInfo'
import ContactForm  from './ContactForm'
import styles       from './Contact.module.css'

const Contact = () => (
  <Section id="contact">

    {/* ── Header ── */}
    <ScrollReveal>
      <div className={styles.header}>
        <span className="label">Contact</span>
        <h2 className={styles.title}>Have a project in mind? Let&apos;s talk.</h2>
      </div>
    </ScrollReveal>

    {/* ── Two-column layout ── */}
    <div className={styles.grid}>
      <ScrollReveal direction="left">
        <ContactInfo />
      </ScrollReveal>

      <ScrollReveal direction="right">
        <ContactForm />
      </ScrollReveal>
    </div>

  </Section>
)

export default Contact
