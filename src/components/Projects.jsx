import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">PORTFOLIO</span>
          <h2 className="projects-title">
            Each project is a unique piece of development 🧩
          </h2>
        </div>

        <div className="project-card">
          <div className="project-image">
            <a href="https://collins-car-rentals.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT1.png" 
                alt="Car Rental Project" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">CAR RENTAL 🚗</h3>
            <p className="project-description">
              A car rental website is an online platform that allows users to rent 
              cars for personal or business use. The website provides an interface 
              for searching, comparing, and reserving cars.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">SCSS</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/COLLINS15943/car-rental-website" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://collins-car-rentals.netlify.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="project-card reverse">
          <div className="project-image">
            <a href="https://collinsecommerce.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT2.png" 
                alt="E-Commerce Platform" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">E-COMMERCE STORE 🛒</h3>
            <p className="project-description">
              A modern e-commerce platform featuring product catalog, shopping cart, 
              and secure checkout. Built with responsive design and optimized for 
              performance across all devices.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/COLLINS15943/basic-eCommerce/" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://collinsecommerce.netlify.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={16} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects