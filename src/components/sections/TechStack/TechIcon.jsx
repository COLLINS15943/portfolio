/**
 * TechIcon.jsx
 *
 * Renders a single technology icon tile. The icon component is resolved
 * from the iconName string at render time, keeping the constants file
 * free of JSX imports.
 */

import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiSupabase, SiFigma,
} from 'react-icons/si'

import styles from './TechStack.module.css'

/** Map iconName strings → actual react-icon components */
const ICON_MAP = {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiSupabase, SiFigma,
}

const TechIcon = ({ iconName, label, id, brandColor }) => {
  const Icon = ICON_MAP[iconName]

  return (
    <div
      className={`${styles.icon} ${styles[id]}`}
      title={label}
      aria-label={label}
      style={{ '--brand-color': brandColor }}
    >
      {Icon ? <Icon size={22} /> : <span>{label[0]}</span>}
    </div>
  )
}

export default TechIcon
