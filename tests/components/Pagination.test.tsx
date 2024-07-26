import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from '../../src/components/Pagination'
import { mockPeople } from '../../src/utils/mocks/mockApiResponses'
import { PeopleResponse } from '../../src/utils/types/api'
import { Provider } from 'react-redux'
import { store } from '../../src/store'

describe('Pagination tests', () => {
  test('Pagination with enough data', async () => {
    const people: PeopleResponse = {
      ...mockPeople,
      previous: 'hello',
    }
    const { unmount } = render(
      <Provider store={store}>
        <Pagination peopleRes={people} pageNumber={1} />
      </Provider>,
    )

    await userEvent.click(screen.getByText(/prev/i))
    await userEvent.click(screen.getByText(/next/i))
    unmount()
  })

  test('Pagination when no data', () => {
    const { unmount } = render(
      <Provider store={store}>
        <Pagination pageNumber={1} />
      </Provider>,
    )

    unmount()
  })
})
