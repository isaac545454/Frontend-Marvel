import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { SeriesDetails } from './session/SeriesDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

import { PageProps } from '@/types/RouteParams'

export default function SeriesPage({ params }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton />}>
        <SeriesDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}