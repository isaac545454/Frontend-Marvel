export function formatDate(date: string | Date): string {
  if (!date) return 'Não disponível'
  
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}