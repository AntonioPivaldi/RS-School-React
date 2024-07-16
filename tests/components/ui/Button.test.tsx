import { describe, test } from 'vitest'
import { render } from '@testing-library/react'
import Button from '../../../src/components/ui/Button'

describe('Buttons render', () => {
  test('Primary button renders successfully', () => {
    const { unmount: buttonUnmount } = render(<Button onClick={() => {}} />)
    buttonUnmount()
  })

  test('Secondary button renders successfully', () => {
    const { unmount: buttonUnmount } = render(
      <Button onClick={() => {}} secondary />,
    )
    buttonUnmount()
  })
})
