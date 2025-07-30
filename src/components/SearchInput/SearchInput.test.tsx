import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('should render correctly', () => {
    render(<SearchInput />)
    
    const input = screen.getByPlaceholderText('Search characters...')
    expect(input).toBeInTheDocument()
  })

  it('should not submit when input is empty', () => {
    const { window } = global
    const initialHref = window.location.href
    
    render(<SearchInput />)
    
    const input = screen.getByPlaceholderText('Search characters...')
    const form = input.closest('form')
    expect(form).toBeInTheDocument()

    fireEvent.submit(form!)
    
    expect(window.location.href).toBe(initialHref)
  })

  it('should update search input value', () => {
    render(<SearchInput />)
    
    const input = screen.getByPlaceholderText('Search characters...')
    fireEvent.change(input, { target: { value: 'Spider' } })
    
    expect(input).toHaveValue('Spider')
  })
})