import { Suspense } from 'react'
import CharactersGrid from './session/CharactersGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'
import { GridCardSkeleton } from '@/components/GridCardSkeleton/GridCardSkeleton'

interface CharactersPageProps {
	searchParams: {
		page?: number
	}
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
	const pageParam = searchParams?.page ?? 1

	return (
		<ErrorBoundary>
			<Suspense fallback={<GridCardSkeleton count={15} />}>
				<CharactersGrid page={pageParam} />
			</Suspense>
		</ErrorBoundary>
	)
}  