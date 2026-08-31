/**
 * ProjectCard.jsx
 *
 * Renders one project in the original alternating layout:
 * image on the left for even cards, image on the right for odd cards.
 * Pass `reverse={true}` to flip the column order.
 */

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from './Projects.module.css'

const ProjectCard = ({ name, description, image, alt, tags, repoUrl, liveUrl, reverse }) => (
  <div className={`${styles.card} ${reverse ? styles.cardReverse : ''}`}>

    {/* ── Screenshot ── */}
    <div className={styles.imageCol}>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-label={`View ${name} live`}>
        <img
          src={image}
          alt={alt}
          className={styles.screenshot}
          loading="lazy"
        />
      </a>
    </div>

    {/* ── Info ── */}
    <div className={styles.infoCol}>
      <h3 className={styles.name}>{name}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <div className={styles.links}>
        <a
          href={repoUrl}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} source code on GitHub`}
        >
          <FaGithub size={17} aria-hidden="true" />
          Code
        </a>

        <a
          href={liveUrl}
          className={`${styles.link} ${styles.linkPrimary}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} live demo`}
        >
          <FaExternalLinkAlt size={15} aria-hidden="true" />
          Live Demo
        </a>
      </div>
    </div>

  </div>
)

export default ProjectCard
