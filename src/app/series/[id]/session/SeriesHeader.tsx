import styles from './SeriesDetails.module.css'

interface SeriesHeaderProps {
  title: string
  startYear: number
  endYear: number
}

export function SeriesHeader({ title, startYear, endYear }: SeriesHeaderProps) {
  const yearRange = endYear > startYear ? `${startYear} - ${endYear}` : startYear

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.yearRange}>{yearRange}</p>
    </div>
  )
}