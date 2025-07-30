import { Suspense } from 'react'
import ComicsGrid from './session/ComicsGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'

interface ComicsPageProps {
  searchParams: {
    page?: number
  }
}

export default function ComicsPage({ searchParams }: ComicsPageProps) {
  const pageParam = searchParams?.page ?? 1

  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={15} />}>
        <ComicsGrid page={pageParam} />
      </Suspense>
    </ErrorBoundary>
  )
} 