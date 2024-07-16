import { test } from 'vitest'
import { render } from '@testing-library/react'
import Spinner from '../../../src/components/ui/Spinner'

test('Spinner is rendered', () => {
  const spinner = render(<Spinner />)
  spinner.findAllByRole('img')
})
