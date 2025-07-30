import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DetailsSkeleton } from './DetailsSkeleton'
import styles from './DetailsSkeleton.module.css'

describe('DetailsSkeleton', () => {
  it('should render all skeleton elements', () => {
    const { container } = render(<DetailsSkeleton />)

    const mainContainer = container.querySelector(`.${styles.container}`)
    expect(mainContainer).toBeInTheDocument()

    const title = container.querySelector(`.${styles.title}.${styles.skeleton}`)
    expect(title).toBeInTheDocument()

    const externalLinks = container.querySelectorAll(`.${styles.externalLink}.${styles.skeleton}`)
    expect(externalLinks).toHaveLength(3)

    const image = container.querySelector(`.${styles.image}.${styles.skeleton}`)
    expect(image).toBeInTheDocument()

    const description = container.querySelector(`.${styles.description}.${styles.skeleton}`)
    expect(description).toBeInTheDocument()

    const stats = container.querySelectorAll(`.${styles.stat}.${styles.skeleton}`)
    expect(stats).toHaveLength(4)

    const sectionTitles = container.querySelectorAll(`.${styles.sectionTitle}.${styles.skeleton}`)
    expect(sectionTitles).toHaveLength(2)

    const listItems = container.querySelectorAll(`.${styles.listItem}.${styles.skeleton}`)
    expect(listItems).toHaveLength(10)

    const footer = container.querySelector(`.${styles.footer} > .${styles.skeleton}`)
    expect(footer).toBeInTheDocument()
  })

  it('should apply skeleton class to all placeholder elements', () => {
    render(<DetailsSkeleton />)
    
    const allElements = screen.getAllByRole('generic', { hidden: true })
    const skeletonCount = allElements.reduce((count, element) => {
      return count + (element.className.includes(styles.skeleton) ? 1 : 0)
    }, 0)

    expect(skeletonCount).toBeGreaterThan(0)
  })

  it('should maintain consistent structure', () => {
    const { container } = render(<DetailsSkeleton />)
  
    expect(container.querySelector(`.${styles.container}`)).toBeInTheDocument()
    expect(container.querySelector(`.${styles.header}`)).toBeInTheDocument()
    expect(container.querySelector(`.${styles.content}`)).toBeInTheDocument()
    expect(container.querySelector(`.${styles.imageContainer}`)).toBeInTheDocument()
    expect(container.querySelector(`.${styles.info}`)).toBeInTheDocument()
  
    const sections = container.querySelectorAll(`.${styles.section}`)
    expect(sections.length).toBeGreaterThanOrEqual(2)
  })
})
