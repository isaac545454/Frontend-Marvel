import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { formatDate } from '../date'

describe('formatDate', () => {
  const mockDate = new Date('2024-03-20T12:00:00Z')

  beforeAll(() => {
    // Fixa o fuso horário para evitar problemas com diferentes timezones
    vi.setSystemTime(mockDate)
    // Mock do toLocaleDateString para garantir consistência
    const originalToLocaleDateString = Date.prototype.toLocaleDateString
    Date.prototype.toLocaleDateString = function(locale, options) {
      return originalToLocaleDateString.call(this, 'pt-BR', {
        timeZone: 'UTC',
        ...options
      })
    }
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('should format date to Brazilian format', () => {
    const date = new Date('2024-03-20T12:00:00Z')
    expect(formatDate(date)).toBe('20/03/2024')
  })

  it('should format date string to Brazilian format', () => {
    expect(formatDate('2024-03-20T12:00:00Z')).toBe('20/03/2024')
  })

  it('should return "Não disponível" for invalid date', () => {
    expect(formatDate('')).toBe('Não disponível')
  })

  it('should handle different date formats', () => {
    expect(formatDate('2024/03/20')).toBe('20/03/2024')
    expect(formatDate('03-20-2024')).toBe('20/03/2024')
  })
})