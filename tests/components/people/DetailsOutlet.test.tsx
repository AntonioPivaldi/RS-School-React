import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '../../../src/store'
import DetailsOutlet from '../../../src/components/people/DetailsOutlet'

test('Details outlet is rendered', async () => {
  const { unmount } = render(
    <Provider store={store}>
      <DetailsOutlet />
    </Provider>,
    { wrapper: BrowserRouter },
  )
  await userEvent.click(screen.getByTestId('details-overlay'))
  unmount()
})
