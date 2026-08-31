/**
 * ContactForm.jsx
 *
 * Controlled form component. Uses the useForm hook for state management
 * and validation, and the api/contact module to send the message.
 * Every input has a visible <label> for full accessibility compliance.
 */

import { HiPaperAirplane }     from 'react-icons/hi'
import useForm                  from '../../../hooks/useForm'
import { validateContactForm }  from '../../../utils/validators'
import { sendContactEmail }     from '../../../api/contact'
import styles                   from './Contact.module.css'

const INITIAL_VALUES = { name: '', email: '', message: '' }

const ContactForm = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm(INITIAL_VALUES, validateContactForm)

  const onSubmit = handleSubmit(async (data) => {
    await sendContactEmail(data)
    reset()
  })

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>

      {/* Name */}
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>Your Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Collins Agbo"
          className={errors.name ? styles.inputError : ''}
          required
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
        />
        {errors.name && (
          <span id="contact-name-error" className={styles.error} role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email */}
      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>Your Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="hello@example.com"
          className={errors.email ? styles.inputError : ''}
          required
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
        />
        {errors.email && (
          <span id="contact-email-error" className={styles.error} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="I'd love to work with you on…"
          rows={5}
          className={errors.message ? styles.inputError : ''}
          required
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <span id="contact-message-error" className={styles.error} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        <HiPaperAirplane size={18} aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

    </form>
  )
}

export default ContactForm
