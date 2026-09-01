/**
 * api/contact.js
 *
 * Sends contact form submissions via Formspree.
 * No API keys, no backend, no configuration needed.
 */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlkokld'

/**
 * Sends the contact form data to Formspree which emails it to agbocollins15@gmail.com.
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<void>}
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })

  if (!response.ok) {
    throw new Error('Failed to send message. Please try again.')
  }
}
