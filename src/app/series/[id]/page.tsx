import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { SeriesDetails } from './session/SeriesDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

interface SeriesPageProps {
  params: {
    id: string
  }
}

export default function SeriesPage({ params }: SeriesPageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton />}>
        <SeriesDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}