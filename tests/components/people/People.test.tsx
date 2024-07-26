import '@testing-library/jest-dom'
import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../src/store'
import {
  mockEmptyPeople,
  mockPeople,
} from '../../../src/utils/mocks/mockApiResponses'
import People from '../../../src/components/people/People'

describe('People cards tests', () => {
  test('Cards renders with people response', () => {
    const { unmount } = render(
      <Provider store={store}>
        <People peopleRes={mockPeople} />
      </Provider>,
      {
        wrapper: BrowserRouter,
      },
    )

    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument()

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
