import React from 'react'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'

export default class MainPage extends React.Component {
  search = (value: string) => {
    console.log(value)
  }

  render() {
    return (
      <div className="px-6 py-4">
        <div>
          <Search search={this.search} />
        </div>
        <div>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
