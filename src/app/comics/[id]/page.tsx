import { Suspense } from 'react'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import ComicDetails from './session/ComicDetails'
import { DetailsSkeleton } from '@/components/DetailsSkeleton/DetailsSkeleton'

interface ComicPageProps {
  params: {
    id: string
  }
}

export default function ComicPage({ params }: ComicPageProps) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<DetailsSkeleton />}>
        <ComicDetails params={params} />
      </Suspense>
    </ErrorBoundary>
  )
}