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
            src="/images/profile.jpeg" 
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
      </div>

      {/* Desktop image - shows on the right side */}
      <div className="hero-image desktop-image">
        <img 
          src="/images/profile.jpeg" 
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