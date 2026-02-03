import '../styles/About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" 
            alt="Workspace setup" 
            className="workspace-image"
          />
        </div>
      
        <div className="about-content">
          <h2 className="about-title">
            <span className="about-label">ABOUT ME</span>
            A dedicated Front-end Developer<br />
            based in Accra, Ghana📍
          </h2>
          
          <p className="about-description">
            As a Junior Front-End Developer, I possess an impressive 
            arsenal of skills in HTML, CSS, JavaScript, React. I excel in designing and maintaining responsive 
            websites that offer a smooth user experience. My expertise 
            lies in crafting dynamic, engaging interfaces through writing 
            clean and optimized code.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About