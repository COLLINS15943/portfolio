/**
 * techStack.js
 * Technology stack data. Each entry maps to a react-icons icon component
 * and a brand colour used for hover states.
 *
 * Icons are imported at the component level (TechIcon.jsx) to keep this
 * file free of JSX and importable anywhere (including non-React contexts).
 */

/** @type {{ id: string, label: string, iconName: string, brandColor: string }[]} */
export const TECH_STACK = [
  { id: 'html',    label: 'HTML5',      iconName: 'SiHtml5',       brandColor: '#e34f26' },
  { id: 'css',     label: 'CSS3',       iconName: 'SiCss3',        brandColor: '#264de4' },
  { id: 'js',      label: 'JavaScript', iconName: 'SiJavascript',  brandColor: '#f0db4f' },
  { id: 'react',   label: 'React',      iconName: 'SiReact',       brandColor: '#61dafb' },
  { id: 'next',    label: 'Next.js',    iconName: 'SiNextdotjs',   brandColor: '#ffffff' },
  { id: 'tw',      label: 'Tailwind',   iconName: 'SiTailwindcss', brandColor: '#38bdf8' },
  { id: 'node',    label: 'Node.js',    iconName: 'SiNodedotjs',   brandColor: '#68a063' },
  { id: 'sb',      label: 'Supabase',   iconName: 'SiSupabase',    brandColor: '#3ecf8e' },
  { id: 'figma',   label: 'Figma',      iconName: 'SiFigma',       brandColor: '#f24e1e' },
]
