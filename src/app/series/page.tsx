import { Suspense } from 'react'
import SeriesGrid from './session/SeriesGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'

interface SeriesPageProps {
  searchParams: {
    page?: number
  }
}

export default function SeriesPage({ searchParams }: SeriesPageProps) {
  const pageParam = searchParams?.page ?? 1

  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={15} />}>
        <SeriesGrid page={pageParam} />
      </Suspense>
    </ErrorBoundary>
  )
} 