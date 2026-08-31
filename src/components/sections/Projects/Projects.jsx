/**
 * Projects.jsx
 *
 * Displays the portfolio in the original alternating layout:
 * image left / info right, then image right / info left, and so on.
 *
 * Tag filtering is powered by ProjectFilters — clicking a tag shows only
 * matching projects. "All" resets the filter.
 *
 * Project data lives in assets/constants/projects.js — add or reorder
 * entries there without touching this component.
 */

import { useState, useMemo } from 'react'

import Section        from '../../common/Section'
import ScrollReveal   from '../../ui/ScrollReveal'
import ProjectCard    from './ProjectCard'
import ProjectFilters from './ProjectFilters'
import { PROJECTS }   from '../../../assets/constants/projects'
import styles         from './Projects.module.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  /** Only re-computed when the active filter changes */
  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.tags.includes(activeFilter)),
    [activeFilter]
  )

  return (
    <Section id="projects" alternate>

      {/* ── Section header ── */}
      <ScrollReveal>
        <div className={styles.header}>
          <span className="label">Portfolio</span>
          <h2 className={styles.title}>A selection of work I've built.</h2>
        </div>
      </ScrollReveal>

      {/* ── Filter bar ── */}
      <ScrollReveal>
        <ProjectFilters active={activeFilter} onChange={setActiveFilter} />
      </ScrollReveal>

      {/* ── Alternating project cards ── */}
      <div className={styles.list}>
        {visibleProjects.map((project, index) => (
          <ScrollReveal key={project.id} style={{ transitionDelay: `${index * 0.08}s` }}>
            {/* Odd indexes flip the image to the right */}
            <ProjectCard
              {...project}
              reverse={index % 2 !== 0}
            />
          </ScrollReveal>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className={styles.empty}>No projects match this filter.</p>
      )}

    </Section>
  )
}

export default Projects
