/**
 * ContactInfo.jsx
 *
 * Left column of the Contact section: location, email, and phone tiles.
 * Isolated from the form so each concern has its own file.
 */

import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi'
import styles from './Contact.module.css'

const INFO_ITEMS = [
  {
    icon:    <HiLocationMarker size={22} />,
    heading: 'Location',
    content: 'Accra, Ghana',
    href:    null,
  },
  {
    icon:    <HiMail size={22} />,
    heading: 'Email',
    content: 'agbocollins15@gmail.com',
    href:    'mailto:agbocollins15@gmail.com',
  },
  {
    icon:    <HiPhone size={22} />,
    heading: 'Phone',
    content: '0559 438 418 / 0552 914 296',
    href:    'tel:+233559438418',
  },
]

const ContactInfo = () => (
  <div className={styles.info}>
    {INFO_ITEMS.map(({ icon, heading, content, href }) => (
      <div key={heading} className={styles.infoItem}>
        <div className={styles.infoIcon} aria-hidden="true">{icon}</div>

        <div className={styles.infoDetails}>
          <h3>{heading}</h3>
          {href
            ? <a href={href}>{content}</a>
            : <p>{content}</p>
          }
        </div>
      </div>
    ))}
  </div>
)

export default ContactInfo
