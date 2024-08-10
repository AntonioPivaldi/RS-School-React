import { test } from 'vitest'
import { render } from '@testing-library/react'
import ErrorButton from '../../src/components/ErrorButton'

test('Error button renders successfully', async () => {
  const { unmount: buttonUnmount } = render(<ErrorButton />)
  buttonUnmount()
})
