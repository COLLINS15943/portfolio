import useScrollReveal from '../hooks/useScrollReveal'
import '../styles/About.css'

const About = () => {
  const imageRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div ref={imageRef} className="about-image reveal-left">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
            alt="Workspace setup"
            className="workspace-image"
          />
        </div>

        <div ref={contentRef} className="about-content reveal-right">
          <h2 className="about-title">
            <span className="about-label">ABOUT ME</span>
            A Software Engineer<br />
            based in Accra, Ghana
          </h2>

          <p className="about-description">
            I'm a Software Engineer with hands-on experience building responsive, 
            performant web applications using modern technologies including React, 
            Next.js, JavaScript, and Supabase. I care about writing clean, 
            maintainable code and delivering interfaces that work well and look sharp 
            on every device. I enjoy solving real problems through thoughtful 
            engineering and always aim to build things that are both functional and 
            well-crafted.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
