import '@testing-library/jest-dom'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {
  mockEmptyPeople,
  mockPeople,
} from '../../../src/utils/mocks/mockApiResponses'
import People from '../../../src/components/people/People'

describe('People cards tests', () => {
  test('Cards renders with people response', () => {
    const { unmount } = render(<People peopleRes={mockPeople} />, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument()

    unmount()
  })

  test('Spinner renders if no people response', () => {
    const { unmount } = render(<People peopleRes={null} />, {
      wrapper: BrowserRouter,
    })

    expect(screen.getByTestId('spinner')).toBeInTheDocument()

    unmount()
  })

  test('Cards render with no people in response', () => {
    const { unmount } = render(<People peopleRes={mockEmptyPeople} />, {
      wrapper: BrowserRouter,
    })

    expect(
      screen.getByText(/No such person you're searching for/i),
    ).toBeInTheDocument()

    unmount()
  })
})
