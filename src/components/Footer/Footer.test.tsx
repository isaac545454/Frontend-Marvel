import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} />
}))

vi.mock('../ActiveLink/ActiveLink', () => ({
  ActiveLink: ({ href, children, className }: { href: string, children: React.ReactNode, className: string }) => (
    <a href={href} className={className}>{children}</a>
  )
}))

describe('Footer', () => {
  it('should render logo', () => {
    render(<Footer />)
    const logo = screen.getByAltText('Marvel Logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', '/marvel-logo.svg')
  })

  it('should render current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} MARVEL`)).toBeInTheDocument()
  })

  it('should render navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('NAVEGAÇÃO')).toBeInTheDocument()
    
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

  it('should render social media links', () => {
    render(<Footer />)
    expect(screen.getByText('REDES SOCIAIS')).toBeInTheDocument()
    
    const github = screen.getByText('GITHUB')
    expect(github).toBeInTheDocument()
    expect(github).toHaveAttribute('href', 'https://github.com/isaac545454')
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noopener noreferrer')
    
    const linkedin = screen.getByText('LINKEDIN')
    expect(linkedin).toBeInTheDocument()
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/isaac-gomes-matos/')
    expect(linkedin).toHaveAttribute('target', '_blank')
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should apply correct styles', () => {
    render(<Footer />)
    
    expect(screen.getByRole('contentinfo').className).toContain('footer')
    expect(screen.getByText('NAVEGAÇÃO').className).toContain('groupTitle')
    expect(screen.getByText('REDES SOCIAIS').className).toContain('groupTitle')
    expect(screen.getByText('GITHUB').className).toContain('socialLink')
    expect(screen.getByText('LINKEDIN').className).toContain('socialLink')
  })
})
