import { useState } from 'react'
import Button from './ui/Button'

export default function ErrorButton() {
  const [isError, setIsError] = useState(false)

  function throwError() {
    throw new Error('Something went wrong...')
  }

  if (isError) {
    throwError()
  }

  return (
    <div className="card">
      <Button onClick={() => setIsError(true)}>Throw error</Button>
    </div>
  )
}
