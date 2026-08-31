/**
 * api/contact.js
 *
 * Handles sending contact form submissions.
 * Currently opens the user's default mail client via a mailto: link.
 *
 * To upgrade to a real API (e.g. Resend, EmailJS, or your own backend),
 * replace `sendContactEmail` with a fetch() call — the ContactForm component
 * doesn't need to change at all.
 */

const RECIPIENT = 'agbocollins15@gmail.com'

/**
 * Opens the default mail client with the form data pre-filled.
 * All values are properly encoded to prevent URL corruption.
 *
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<void>}
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
  const body    = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )

  window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
}
