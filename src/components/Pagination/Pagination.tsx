'use client'

import { usePagination } from './usePagination'
import styles from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const {
    visiblePages,
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    isFirstPage,
    isLastPage,
    showPagination
  } = usePagination({ currentPage, totalPages })

  if (!showPagination) return null

  return (
    <div className={styles.pagination}>
      <button
        onClick={goToPreviousPage}
        disabled={isFirstPage}
        className={styles.pageButton}
        aria-label="Página anterior"
      >
        ←
      </button>

      {visiblePages.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`${styles.pageButton} ${currentPage === pageNumber ? styles.active : ''}`}
          aria-current={currentPage === pageNumber ? 'page' : undefined}
        >
          {pageNumber}
        </button>
      ))}

      <button
        onClick={goToNextPage}
        disabled={isLastPage}
        className={styles.pageButton}
        aria-label="Próxima página"
      >
        →
      </button>
    </div>
  )
}