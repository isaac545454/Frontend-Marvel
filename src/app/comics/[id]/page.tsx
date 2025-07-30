import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import ComicDetails from './session/ComicDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

import { PageProps } from '@/types/RouteParams'

export default function ComicPage({ params }: PageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton />}>
        <ComicDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}