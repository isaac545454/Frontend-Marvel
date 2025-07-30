import { Suspense } from 'react'
import SeriesGrid from './session/SeriesGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { PageProps } from '@/types/Pagination'

export default function SeriesPage({ searchParams }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={15} />}>
        <SeriesGrid searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  )
}