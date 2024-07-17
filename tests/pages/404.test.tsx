import { test } from 'vitest'
import { render } from '@testing-library/react'
import PageNotFound from '../../src/pages/404'
import { BrowserRouter } from 'react-router-dom'

test('404 page render test', async () => {
  const { unmount } = render(<PageNotFound />, { wrapper: BrowserRouter })

  unmount()
})
