import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'
import styles from './Pagination.module.css' 

// Mocks das funções do hook usePagination
const mockHandlePageChange = vi.fn()
const mockGoToNextPage = vi.fn()
const mockGoToPreviousPage = vi.fn()

vi.mock('./usePagination', () => ({
  usePagination: vi.fn(({ currentPage, totalPages }) => ({
    visiblePages: [1, 2, 3, 4, 5],
    handlePageChange: mockHandlePageChange,
    goToNextPage: mockGoToNextPage,
    goToPreviousPage: mockGoToPreviousPage,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
    showPagination: totalPages > 1
  }))
}))

describe('Pagination', () => {
  beforeEach(() => {
    vi.clearAllMocks() // limpa todos os mocks antes de cada teste
  })

  it('should render pagination buttons', () => {
    render(<Pagination currentPage={1} totalPages={5} />)

    expect(screen.getByLabelText('Página anterior')).toBeInTheDocument()
    expect(screen.getByLabelText('Próxima página')).toBeInTheDocument()

    const pageButtons = screen.getAllByRole('button').filter(button => 
      !button.hasAttribute('aria-label')
    )
    expect(pageButtons).toHaveLength(5)
    pageButtons.forEach((button, index) => {
      expect(button).toHaveTextContent(String(index + 1))
    })
  })

  it('should highlight current page', () => {
    render(<Pagination currentPage={3} totalPages={5} />)

    const currentPageButton = screen.getByRole('button', { current: 'page' })
    expect(currentPageButton).toHaveTextContent('3')
    expect(currentPageButton).toHaveClass(styles.active)
  })

  it('should disable previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={5} />)

    const prevButton = screen.getByLabelText('Página anterior')
    expect(prevButton).toBeDisabled()
  })

  it('should disable next button on last page', () => {
    render(<Pagination currentPage={5} totalPages={5} />)

    const nextButton = screen.getByLabelText('Próxima página')
    expect(nextButton).toBeDisabled()
  })

  it('should not render pagination when there is only one page', () => {
    render(<Pagination currentPage={1} totalPages={1} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })


  it('should handle navigation button clicks', () => {
    render(<Pagination currentPage={3} totalPages={5} />)

    const prevButton = screen.getByLabelText('Página anterior')
    const nextButton = screen.getByLabelText('Próxima página')

    fireEvent.click(prevButton)
    expect(mockGoToPreviousPage).toHaveBeenCalled()

    fireEvent.click(nextButton)
    expect(mockGoToNextPage).toHaveBeenCalled()
  })

  it('should handle page button clicks', () => {
    render(<Pagination currentPage={3} totalPages={5} />)

    const pageButton = screen.getByText('4')
    fireEvent.click(pageButton)
    expect(mockHandlePageChange).toHaveBeenCalledWith(4)
  })
})
