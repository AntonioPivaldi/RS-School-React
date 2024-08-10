import { test } from 'vitest'
import { render } from '@testing-library/react'
import FailedRequestMessage from '../../src/components/FailedRequestMessage'

test('Failed request message can be rendered', () => {
  const { unmount } = render(<FailedRequestMessage />)
  unmount()
})
