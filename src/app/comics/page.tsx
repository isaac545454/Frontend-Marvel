import { Suspense } from 'react'
import ComicsGrid from './session/ComicsGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'
import { PageProps } from '@/types/Pagination'

export default function ComicsPage({ searchParams }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<GridCardSkeleton count={15} />}>
        <ComicsGrid searchParams={searchParams} />
      </Suspense>
    </ErrorBoundary>
  )
}