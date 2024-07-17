import { test } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MainPage from '../../src/pages/Main'

test('Main page render test', async () => {
  const { unmount } = render(<MainPage />, { wrapper: BrowserRouter })

  unmount()
})
