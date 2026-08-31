/**
 * SocialLinks.jsx
 *
 * Renders social icon links from the socialLinks constants.
 * Adding a new platform only requires an edit in socialLinks.js.
 */

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SOCIAL_LINKS }         from '../../../assets/constants/socialLinks'
import styles                   from './SocialLinks.module.css'

/** Map iconName strings → react-icon components */
const ICON_MAP = { FaLinkedin, FaGithub }

const SocialLinks = () => (
  <div className={styles.wrapper}>
    {SOCIAL_LINKS.map(({ id, href, label, iconName }) => {
      const Icon = ICON_MAP[iconName]
      return (
        <a
          key={id}
          href={href}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {Icon && <Icon size={20} />}
        </a>
      )
    })}
  </div>
)

export default SocialLinks
