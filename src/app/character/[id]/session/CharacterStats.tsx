import { Character } from '@/types/Character'
import { CHARACTER_STATS } from './constants'
import styles from './CharacterDetails.module.css'

interface CharacterStatsProps {
  character: Character
}

export function CharacterStats({ character }: CharacterStatsProps) {
  return (
    <div className={styles.stats}>
      {CHARACTER_STATS.map(stat => (
        <div key={stat.key} className={styles.stat}>
          <span className={styles.statLabel}>{stat.label}</span>
          <span className={styles.statValue}>{character[stat.key].available}</span>
        </div>
      ))}
    </div>
  )
}