/**
 * ContactForm.jsx
 *
 * Sends messages via EmailJS. Shows a success or error message
 * after submission so the user knows what happened.
 */

import { useState }                from 'react'
import { HiPaperAirplane }         from 'react-icons/hi'
import useForm                     from '../../../hooks/useForm'
import { validateContactForm }     from '../../../utils/validators'
import { sendContactEmail }        from '../../../api/contact'
import styles                      from './Contact.module.css'

const INITIAL_VALUES = { name: '', email: '', message: '' }

const ContactForm = () => {
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } =
    useForm(INITIAL_VALUES, validateContactForm)

  const onSubmit = handleSubmit(async (data) => {
    try {
      await sendContactEmail(data)
      reset()
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
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
        />
        {errors.name && <span className={styles.error} role="alert">{errors.name}</span>}
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
        />
        {errors.email && <span className={styles.error} role="alert">{errors.email}</span>}
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
        />
        {errors.message && <span className={styles.error} role="alert">{errors.message}</span>}
      </div>

      {/* Success / error feedback */}
      {status === 'success' && (
        <p className={styles.successMsg}>
          Message sent! I'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong. Please try emailing me directly at agbocollins15@gmail.com
        </p>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
        onClick={() => setStatus(null)}
      >
        <HiPaperAirplane size={18} aria-hidden="true" />
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </button>

    </form>
  )
}

export default ContactForm
