import styles from './NoResults.module.css'
import { SearchStateConfig } from './searchStates'

interface NoResultsProps {
  state: SearchStateConfig
}

export function NoResults({ state }: NoResultsProps) {
  const messages = {
    queryNot: () => 'Digite algo para pesquisar...',
    noResults: () => `Nenhum personagem encontrado para "${state.data?.query}"`,
    results: () => null
  }

  return (
    <div className={styles.message}>
      {messages[state.state]()}
    </div>
  )
}