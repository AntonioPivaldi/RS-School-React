import '@testing-library/jest-dom'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PersonCard from '../../../src/components/people/PersonCard'
import { mockPeople } from '../../../src/utils/mocks/mockApiResponses'

test('Person card render', () => {
  const { unmount } = render(<PersonCard person={mockPeople.results[0]} />, {
    wrapper: BrowserRouter,
  })

  expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument()

  unmount()
})
