/**
 * ClientCard.jsx
 *
 * Lean card for the Client Work tab.
 * Shows: screenshot, industry label, title, one-line description,
 * tech tags, and a single "View Site" CTA.
 *
 * Intentionally lighter than ProjectCard — no alternating layout,
 * no repo link — keeping the client grid uncluttered.
 */

import { FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import styles from './Projects.module.css'

const ClientCard = ({ client, industry, title, description, tags, image, alt, liveUrl, confidential }) => (
  <div className={styles.clientCard}>

    {/* Screenshot */}
    <div className={styles.clientImageWrap}>
      <img
        src={image}
        alt={alt}
        className={styles.clientImage}
        loading="lazy"
      />
    </div>

    {/* Info */}
    <div className={styles.clientInfo}>

      <div className={styles.clientMeta}>
        <span className={styles.clientIndustry}>{industry}</span>
        <span className={styles.clientName}>{client}</span>
      </div>

      <h3 className={styles.clientTitle}>{title}</h3>

      <p className={styles.clientDescription}>{description}</p>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {confidential ? (
        <span className={styles.confidential}>
          <FaLock size={10} aria-hidden="true" />
          NDA — details on request
        </span>
      ) : liveUrl ? (
        <a
          href={liveUrl}
          className={`${styles.link} ${styles.linkPrimary}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} live site`}
        >
          <FaExternalLinkAlt size={13} aria-hidden="true" />
          View Site
        </a>
      ) : null}

    </div>
  </div>
)

export default ClientCard
