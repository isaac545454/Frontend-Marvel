import { describe, it, expect } from 'vitest'
import { formatPrice } from '../formatPrice'

describe('formatPrice', () => {
  it('should format integer numbers to USD currency', () => {
    expect(formatPrice(10)).toBe('$10.00')
    expect(formatPrice(1000)).toBe('$1,000.00')
    expect(formatPrice(1000000)).toBe('$1,000,000.00')
  })

  it('should format decimal numbers to USD currency', () => {
    expect(formatPrice(10.5)).toBe('$10.50')
    expect(formatPrice(10.55)).toBe('$10.55')
    expect(formatPrice(10.555)).toBe('$10.56') // Deve arredondar para 2 casas decimais
  })

  it('should format negative numbers to USD currency', () => {
    expect(formatPrice(-10)).toBe('-$10.00')
    expect(formatPrice(-10.5)).toBe('-$10.50')
    expect(formatPrice(-1000.55)).toBe('-$1,000.55')
  })

  it('should format zero to USD currency', () => {
    expect(formatPrice(0)).toBe('$0.00')
  })

  it('should handle very large numbers', () => {
    expect(formatPrice(999999999.99)).toBe('$999,999,999.99')
  })

  it('should handle very small decimal numbers', () => {
    expect(formatPrice(0.01)).toBe('$0.01')
    expect(formatPrice(0.1)).toBe('$0.10')
  })
})