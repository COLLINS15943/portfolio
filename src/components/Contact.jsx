import { useState } from 'react'
import { HiLocationMarker, HiMail, HiPhone, HiPaperAirplane } from 'react-icons/hi'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoLink = `mailto:agbocollins15@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">CONTACT</span>
          <h2 className="contact-title">
            Don't be shy! Hit me up! 👋
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <HiLocationMarker size={24} />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Accra, Ghana</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <HiMail size={24} />
              </div>
              <div className="contact-details">
                <h3>Mail</h3>
                <a href="mailto:agbocollins15@gmail.com">agbocollins15@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <HiPhone size={24} />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+23352914296">+233 52 914 296</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <HiPaperAirplane size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact