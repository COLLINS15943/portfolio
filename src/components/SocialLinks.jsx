import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/SocialLinks.css'

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/collins-agbo-7080a122b" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={22} />
      </a>
      <a href="https://github.com/COLLINS15943/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={22} />
      </a>
    </div>
  )
} 

export default SocialLinks