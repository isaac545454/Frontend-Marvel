import { Suspense } from 'react'
import CharactersGrid from './session/CharactersGrid'
import { ErrorBoundary } from '@/components/ErrorBoundary/ErrorBoundary'

interface CharactersPageProps {
	searchParams: {
		page?: number
	}
}

export default function CharactersPage({ searchParams }: CharactersPageProps) {
	const pageParam = searchParams?.page ?? 1

	return (
		<ErrorBoundary>
			<Suspense fallback={<div>Carregando personagens...</div>}>
				<CharactersGrid page={pageParam} />
			</Suspense>
		</ErrorBoundary>
	)
}  