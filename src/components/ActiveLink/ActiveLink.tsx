'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './ActiveLink.module.css'

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ActiveLink({ href, children, className = '' }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={`${styles.link} ${isActive ? styles.active : ''} ${className}`}
    >
      {children}
    </Link>
  )
}