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
      return (
        <div className="flex flex-col pl-40 gap-6 h-dvh bg-[#0074D0] text-white">
          <div className="mt-28">
            <p className="text-[10rem]">{':('}</p>
            <div className="text-[2rem]">
              <p>Error message: "{this.state.errorMessage}"</p>
              <p>
                {
                  'Lorem ipsum, yada yada. Please, be more careful next time! :)'
                }
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
