import '@testing-library/jest-dom'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../src/store'
import PersonCard from '../../../src/components/people/PersonCard'
import { mockPeople } from '../../../src/utils/mocks/mockApiResponses'

test('Person card render', async () => {
  const { unmount } = render(
    <Provider store={store}>
      <PersonCard person={mockPeople.results[0]} />
    </Provider>,
    {
      wrapper: BrowserRouter,
    },
  )

  expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument()
  await userEvent.click(screen.getByText(/select/i))

  unmount()
})
