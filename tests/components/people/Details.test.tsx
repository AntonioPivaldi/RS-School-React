import { describe, expect, test } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Details from '../../../src/components/people/Details'
import { mockPeople } from '../../../src/utils/mocks/mockApiResponses'

describe('Details test', () => {
  test('Details are rendered', async () => {
    const { unmount } = render(
      <Details isFetching={false} peopleRes={mockPeople} />,
      {
        wrapper: BrowserRouter,
      },
    )

    unmount()
  })

  test('Spinner is shown till no details', () => {
    const { unmount } = render(<Details isFetching peopleRes={undefined} />, {
      wrapper: BrowserRouter,
    })
    expect(screen.getByTestId('spinner')).toBeInTheDocument()
    unmount()
  })
})
