'use client'

import { usePathname, useSearchParams } from 'next/navigation'

interface UsePaginationProps {
  currentPage: number
  totalPages: number
}

export function usePagination({ currentPage, totalPages }: UsePaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    window.location.href = `${pathname}?${params.toString()}`
  }

  const getVisiblePages = () => {
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - 2)
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    )
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  return {
    currentPage,
    totalPages,
    visiblePages: getVisiblePages(),
    handlePageChange,
    goToNextPage,
    goToPreviousPage,
    isFirstPage: currentPage <= 1,
    isLastPage: currentPage >= totalPages,
    showPagination: totalPages > 1
  }
} 