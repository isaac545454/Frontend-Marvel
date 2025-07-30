import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorBoundary } from './ErrorBoundary'

vi.mock('./ErrorBoundary.module.css', () => ({
  default: {
    errorTitle: 'errorTitle',
    errorMessage: 'errorMessage',
    backButton: 'backButton',
    reloadButton: 'reloadButton',
    errorContainer: 'errorContainer',
    buttonContainer: 'buttonContainer',
  }
}))

const ThrowError = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>Normal content</div>
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should apply error styles', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Oops! Algo deu errado')).toHaveClass('errorTitle')
    expect(screen.getByText('Não foi possível carregar o conteúdo.')).toHaveClass('errorMessage')
    expect(screen.getByText('Voltar para Página Inicial')).toHaveClass('backButton')
    expect(screen.getByText('Tentar Novamente')).toHaveClass('reloadButton')
  })
})
