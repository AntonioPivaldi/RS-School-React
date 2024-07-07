import React, { PropsWithChildren } from 'react'

interface BoundaryState {
  errorMessage: string
}

class ErrorBoundary extends React.Component<PropsWithChildren, BoundaryState> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { errorMessage: '' }
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error.message)
    return { errorMessage: error.message }
  }

  render() {
    if (this.state.errorMessage) {
      return <p className="p-6">{this.state.errorMessage}</p>
    }

    return this.props.children
  }
}

export default ErrorBoundary
