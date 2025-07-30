import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageContainer } from './PageContainer'
import styles from './PageContainer.module.css'

describe('PageContainer', () => {
  it('should render children inside a container with correct class', () => {
    render(
      <PageContainer>
        <p>Conteúdo de teste</p>
      </PageContainer>
    )

    const container = screen.getByText('Conteúdo de teste').parentElement
    expect(container).toBeInTheDocument()
    expect(container).toHaveClass(styles.container)
  })
})
