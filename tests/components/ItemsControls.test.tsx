import { describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ItemsControls from '../../src/components/ItemsControls'
import { Provider, useDispatch } from 'react-redux'
import { store } from '../../src/store'
import { addPerson } from '../../src/store/slices/selectedItemsSlice'
import { mockPeople } from '../../src/utils/mocks/mockApiResponses'

function DispatchComponent() {
  const dispatch = useDispatch()
  dispatch(addPerson(mockPeople.results[0]))

  return <></>
}

describe('Items controls', () => {
  test('Test unselect click', async () => {
    const { unmount } = render(
      <>
        <Provider store={store}>
          <DispatchComponent />
          <ItemsControls />
        </Provider>
        ,
      </>,
    )

    await userEvent.click(screen.getByText(/unselect all/i))
    unmount()
  })
})
