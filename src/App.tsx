import React, { ReactNode } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Props {}

interface State {
  count: number
}

class App extends React.Component<Props, State> {
  constructor(props: React.PropsWithChildren) {
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
        <div className="card">
          <button onClick={this.add}>count is {this.state.count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    )
  }
}

export default App
