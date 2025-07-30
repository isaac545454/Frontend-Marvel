import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import styles from './Header.module.css'

 
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} />
}))
 
vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string, children: React.ReactNode, className: string }) => (
    <a href={href} className={className}>{children}</a>
  )
}))

 
vi.mock('../ActiveLink/ActiveLink', () => ({
  ActiveLink: ({ href, children, className }: { href: string, children: React.ReactNode, className: string }) => (
    <a href={href} className={className}>{children}</a>
  )
}))

describe('Header', () => {
  it('should render logo with link to home', () => {
    render(<Header />)
    
    const logo = screen.getByAltText('Marvel Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/marvel-logo.svg')
    
    const logoLink = logo.closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('should render navigation links', () => {
    render(<Header />)
    
    const characters = screen.getByText('CHARACTERS')
    expect(characters).toBeInTheDocument()
    expect(characters).toHaveAttribute('href', '/')
    
    const comics = screen.getByText('COMICS')
    expect(comics).toBeInTheDocument()
    expect(comics).toHaveAttribute('href', '/comics')
    
    const series = screen.getByText('SERIES')
    expect(series).toBeInTheDocument()
    expect(series).toHaveAttribute('href', '/series')
  })

  it('should render favorites link with icon', () => {
    render(<Header />)
    
    const favorites = screen.getByText('FAVORITES')
    expect(favorites).toBeInTheDocument()
    expect(favorites).toHaveAttribute('href', '/favorites')
    
    const favoritesLink = favorites.closest('a')
    expect(favoritesLink).toHaveClass(styles.favoritesLink)
    
    const heartIcon = favoritesLink?.querySelector('svg')
    expect(heartIcon).toBeInTheDocument()
    expect(heartIcon).toHaveClass(styles.heartIcon)
  })

  it('should apply correct styles', () => {
    render(<Header />)
    
    expect(screen.getByRole('banner')).toHaveClass(styles.header)
    expect(screen.getByRole('navigation')).toHaveClass(styles.nav)
    
    const links = screen.getAllByRole('link').filter(link =>
      link.classList.contains(styles.navLink)
    )
    links.forEach(link => {
      expect(link).toHaveClass(styles.navLink)
    })
  })
})