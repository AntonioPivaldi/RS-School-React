import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import DetailsOutlet from '../../../src/components/people/DetailsOutlet'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/user-event'
import userEvent from '@testing-library/user-event'

test('Details outlet is rendered', async () => {
  const { unmount } = render(<DetailsOutlet />, { wrapper: BrowserRouter })
  await userEvent.click(screen.getByTestId('details-overlay'))
  unmount()
})
