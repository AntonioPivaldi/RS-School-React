import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import MainPage from '../../src/pages/Main'
import ThemeProvider from '../../src/context/ThemeProvider'

test('Main page render test', async () => {
  const { unmount } = render(
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>,
    { wrapper: BrowserRouter },
  )

  await userEvent.click(screen.getByTestId('theme-switch'))
  await userEvent.click(screen.getByTestId('theme-switch'))

  unmount()
})
