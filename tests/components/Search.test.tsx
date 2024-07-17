import { test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Search from '../../src/components/Search'
import userEvent from '@testing-library/user-event'

function setSearchString(str: string) {
  return str
}

test('Search is rendered', async () => {
  const { unmount } = render(
    <Search searchString="" setSearchString={setSearchString} />,
  )

  await userEvent.type(screen.getByPlaceholderText(/search.../i), 'hey')
  await userEvent.click(screen.getByText(/search/i))
  unmount()
})
