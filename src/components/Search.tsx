import React, { BaseSyntheticEvent, PropsWithChildren } from 'react'
import { SEARCH_KEY } from '../utils/constants'
import Button from './ui/Button'

interface SearchProps {
  search: (value: string) => void
}

interface SearchState {
  searchString: string
}

export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: PropsWithChildren<SearchProps>) {
    super(props)
    this.state = {
      searchString: localStorage.getItem(SEARCH_KEY) || '',
    }
  }

  handleInputChange = (e: BaseSyntheticEvent) => {
    const value = e.target.value
    this.setState({ searchString: value })
    localStorage.setItem(SEARCH_KEY, value)
  }

  handleSearchClick = () => {
    if (this.state.searchString) {
      this.props.search(this.state.searchString)
    }
  }

  render() {
    return (
      <div className="flex gap-6 items-center">
        <div>
          <input
            className="py-[6px] px-2 border border-gray-200 rounded-lg outline-none"
            placeholder="Search..."
            type="text"
            value={this.state.searchString}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <Button
            onClick={this.handleSearchClick}
            disabled={!this.state.searchString}
            secondary
          >
            Search
          </Button>
        </div>
      </div>
    )
  }
}
