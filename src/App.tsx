import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ErrorButton from './components/ErrorButton'

class App extends React.Component {
  render() {
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
