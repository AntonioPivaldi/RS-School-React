import React, { PropsWithChildren } from 'react'

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
    return (
      <div className="card">
        <button onClick={() => this.setState({ isError: true })}>
          Throw error
        </button>
        {(() => {
          if (this.state.isError) {
            this.throwError()
          }

          return <></>
        })()}
      </div>
    )
  }
}
