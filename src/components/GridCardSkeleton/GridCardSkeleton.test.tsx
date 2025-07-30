import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GridCardSkeleton } from './GridCardSkeleton'
import styles from './GridCardSkeleton.module.css'

describe('GridCardSkeleton', () => {
  it('should render default number of skeleton cards (12)', () => {
    render(<GridCardSkeleton />)
    const cards = screen.getAllByRole('generic').filter(el =>
      el.className.includes(styles.card)
    )
    expect(cards).toHaveLength(12)
  })

  it('should render specified number of skeleton cards', () => {
    render(<GridCardSkeleton count={5} />)
    const cards = screen.getAllByRole('generic').filter(el =>
      el.className.includes(styles.card)
    )
    expect(cards).toHaveLength(5)
  })

  it('should render skeleton elements for each card', () => {
    render(<GridCardSkeleton count={1} />)
    const card = screen.getAllByRole('generic').find(el =>
      el.className.includes(styles.card)
    )
    expect(card).toBeInTheDocument()
    expect(card?.querySelector(`.${styles.imageContainer}`)).toBeInTheDocument()
    expect(card?.querySelector(`.${styles.title}`)).toBeInTheDocument()
    expect(card?.querySelector(`.${styles.text}`)).toBeInTheDocument()
    expect(card?.querySelector(`.${styles.textSmall}`)).toBeInTheDocument()
  })


  it('should handle zero count', () => {
    const { container } = render(<GridCardSkeleton count={0} />)
    const grid = container.querySelector(`.${styles.grid}`)
    expect(grid).toBeInTheDocument()
    expect(grid).toHaveClass(styles.grid)
    
  })
})
