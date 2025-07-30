import { ReactNode } from 'react'
import styles from './PageContainer.module.css'

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}