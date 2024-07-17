import '@testing-library/jest-dom'
import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../src/ErrorBoundary'

describe('Error boundary render', () => {
  test('Renders with error object', () => {
    const { unmount } = render(<ErrorBoundary />)

    vi.mock('react-router-dom', () => ({
      useRouteError: () => Error('Test'),
    }))

    expect(screen.getByText(/error message:/i)).toBeInTheDocument()

    unmount()
  })

  test('Renders with unknown error', () => {
    const { unmount } = render(<ErrorBoundary />)

    vi.mock('react-router-dom', () => ({
      useRouteError: () => 'Definetly not error',
    }))

    expect(screen.getByText(/error message:/i)).toBeInTheDocument()

    unmount()
  })
})
