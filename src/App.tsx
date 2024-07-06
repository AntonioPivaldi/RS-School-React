import React, { PropsWithChildren, ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorButton from './components/ErrorButton'

interface State {
  count: number
}

class App extends React.Component<object, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  state: State

  add = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }))
  }

  render(): ReactNode {
    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <ErrorButton />
      </>
    )
  }
}

export default App
