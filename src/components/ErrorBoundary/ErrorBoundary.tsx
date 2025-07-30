'use client'

import React from 'react'
import styles from './ErrorBoundary.module.css'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error Boundary capturou um erro:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className={styles.errorContainer}>
          <h3 className={styles.errorTitle}>Oops! Algo deu errado</h3>
          <p className={styles.errorMessage}>
            Não foi possível carregar o conteúdo. Por favor, tente novamente.
          </p>
          <button 
            className={styles.reloadButton}
            onClick={() => window.location.reload()}
          >
            Recarregar Página
          </button>
        </div>
      )
    }

    return this.props.children
  }
} 