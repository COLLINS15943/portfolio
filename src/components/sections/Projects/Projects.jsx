/**
 * Projects.jsx
 *
 * Two-tab section: "Personal" shows alternating project cards,
 * "Client Work" shows a lean client grid.
 *
 * Data sources:
 *   Personal  → assets/constants/projects.js
 *   Client    → assets/constants/clients.js
 */

import { useState } from 'react'

import Section      from '../../common/Section'
import ScrollReveal from '../../ui/ScrollReveal'
import ProjectCard  from './ProjectCard'
import ClientCard   from './ClientCard'
import { PROJECTS } from '../../../assets/constants/projects'
import { CLIENTS }  from '../../../assets/constants/clients'
import styles       from './Projects.module.css'

const TABS = ['Personal', 'Client Work']

const Projects = () => {
  const [activeTab, setActiveTab] = useState('Personal')

  return (
    <Section id="projects" alternate>

      {/* ── Section header ── */}
      <ScrollReveal>
        <div className={styles.header}>
          <span className="label">Projects</span>
          <h2 className={styles.title}>Featured work &amp; client projects.</h2>
        </div>
      </ScrollReveal>

      {/* ── Tab toggle ── */}
      <ScrollReveal>
        <div className={styles.tabs} role="tablist" aria-label="Portfolio type">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Personal tab ── */}
      {activeTab === 'Personal' && (
        <div className={styles.list}>
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} style={{ transitionDelay: `${index * 0.08}s` }}>
              <ProjectCard {...project} reverse={index % 2 !== 0} />
            </ScrollReveal>
          ))}
        </div>
      )}

      {/* ── Client Work tab ── */}
      {activeTab === 'Client Work' && (
        <div className={styles.clientGrid}>
          {CLIENTS.map((client, index) => (
            <ScrollReveal key={client.id} style={{ transitionDelay: `${index * 0.07}s` }}>
              <ClientCard {...client} />
            </ScrollReveal>
          ))}
        </div>
      )}

    </Section>
  )
}

export default Projects
