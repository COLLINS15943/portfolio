import TechStack from './TechStack'
import SocialLinks from './SocialLinks'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Front-End React<br />
          Developer 👋
        </h1>
        
        {/* Mobile image - shows between title and subtitle */}
        <div className="hero-image mobile-image">
          <img 
            src="/images/profile.jpeg?v=2" 
            alt="Collins Agbo" 
            className="profile-image"
          />
          <div className="floating-dot dot-1"></div>
          <div className="floating-dot dot-2"></div>
          <div className="floating-dot dot-3"></div>
        </div>
        
        <p className="hero-subtitle">
          Hi, I'm Collins Agbo. A passionate Front-end React<br />
          Developer based in Accra, Ghana.
        </p>
        <div className="hero-location">
          <span className="location-pin">📍</span>
          Accra, Ghana
        </div>
        
        <SocialLinks />
        <TechStack />
        
        <a href="/cv/Collins_Agbo_CV.pdf" download="Collins_Agbo_CV.pdf" className="download-cv-btn">
          Download CV
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14 2v6h6"/>
            <path d="M12 18v-6"/>
            <path d="M9 15l3 3 3-3"/>
          </svg>
        </a>
      </div>

      {/* Desktop image - shows on the right side */}
      <div className="hero-image desktop-image">
        <img 
          src="/images/profile.jpeg?v=2" 
          alt="Collins Agbo" 
          className="profile-image"
        />
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
      </div>
    </main>
  )
}

export default Hero