import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/Projects.css'

const Projects = () => {
  const headerRef = useScrollReveal()
  const card1Ref = useScrollReveal()
  const card2Ref = useScrollReveal()
  const card3Ref = useScrollReveal()

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div ref={headerRef} className="projects-header reveal">
          <span className="projects-label">PORTFOLIO</span>
          <h2 className="projects-title">
            Each project is a unique piece of development 🧩
          </h2>
        </div>

        <div ref={card1Ref} className="project-card reveal">
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
              <a href="https://github.com/cadsix/car-rental-website" className="project-link" target="_blank" rel="noopener noreferrer">
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

        <div ref={card2Ref} className="project-card reverse reveal">
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
              <a href="https://github.com/cadsix/basic-eCommerce/" className="project-link" target="_blank" rel="noopener noreferrer">
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

        <div ref={card3Ref} className="project-card reveal">
          <div className="project-image">
            <a href="https://food-ecommerce-ia3d.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/PORT3.png" 
                alt="Food E-Commerce Project" 
                className="project-screenshot"
              />
            </a>
          </div>
          
          <div className="project-info">
            <h3 className="project-name">FOOD E-COMMERCE 🍔</h3>
            <p className="project-description">
              A food e-commerce platform where users can browse menus, add items 
              to their cart, and place orders online. Designed with a clean UI 
              and smooth user experience across all devices.
            </p>
            
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            
            <div className="project-links">
              <a href="https://github.com/cadsix/food-ecommerce" className="project-link" target="_blank" rel="noopener noreferrer">
                <FaGithub size={18} />
                Code
              </a>
              <a href="https://food-ecommerce-ia3d.vercel.app/" className="project-link live-demo" target="_blank" rel="noopener noreferrer">
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
