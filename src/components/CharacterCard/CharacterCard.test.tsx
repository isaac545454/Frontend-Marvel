import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CharacterCard } from './CharacterCard'

// Mock do next/image
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} />
}))

// Mock do next/link
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode, href: string }) => (
    <a href={href}>{children}</a>
  )
}))

describe('CharacterCard', () => {
  const mockCharacter = {
    id: 1,
    name: 'Spider-Man',
    description: 'Your friendly neighborhood Spider-Man',
    thumbnail: {
      path: 'http://example.com/image',
      extension: 'jpg'
    }
  }

  it('should render character name', async () => {
    render(await CharacterCard({ character: mockCharacter }))
    expect(screen.getByText('Spider-Man')).toBeInTheDocument()
  })

  it('should render character description when provided', async () => {
    render(await CharacterCard({ character: mockCharacter }))
    expect(screen.getByText('Your friendly neighborhood Spider-Man')).toBeInTheDocument()
  })

  it('should not render description when not provided', async () => {
    const characterWithoutDescription = {
      ...mockCharacter,
      description: ''
    }
    render(await CharacterCard({ character: characterWithoutDescription }))
    const description = screen.queryByText('Your friendly neighborhood Spider-Man')
    expect(description).not.toBeInTheDocument()
  })

  it('should render character image with correct src', async () => {
    render(await CharacterCard({ character: mockCharacter }))
    const image = screen.getByAltText('Spider-Man')
    expect(image).toHaveAttribute('src', 'http://example.com/image.jpg')
  })

  it('should link to character details page', async () => {
    render(await CharacterCard({ character: mockCharacter }))
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/character/1')
  })
})