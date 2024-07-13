import React, { PropsWithChildren } from 'react'
import Button from './ui/Button'

interface State {
  isError: boolean
}

export default class ErrorButton extends React.Component<object, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
      isError: false,
    }
  }

  throwError = () => {
    throw new Error('Something went wrong...')
  }

  render(): React.ReactNode {
    if (this.state.isError) {
      this.throwError()
    }

    return (
      <div className="card">
        <Button onClick={() => this.setState({ isError: true })}>
          Throw error
        </Button>
      </div>
    )
  }
}
