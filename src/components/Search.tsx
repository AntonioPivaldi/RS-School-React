import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { SEARCH_KEY } from '../utils/constants'
import Button from './ui/Button'

interface SearchProps {
  search: (value: string) => void
}

export default function Search({ search }: SearchProps) {
  const initialSearchString = localStorage.getItem(SEARCH_KEY) || ''
  const [searchString, setSearchString] = useState(initialSearchString)

  function handleInputChange(e: BaseSyntheticEvent) {
    const value = e.target.value
    setSearchString(value)
  }

  function handleSearchClick() {
    localStorage.setItem(SEARCH_KEY, searchString)
    search(searchString)
  }

  useEffect(() => {
    search(initialSearchString)
  }, [search, initialSearchString])

  return (
    <div className="flex items-center gap-6">
      <div>
        <input
          className="rounded-lg border border-gray-200 px-2 py-[6px] outline-none"
          placeholder="Search..."
          type="text"
          value={searchString}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <Button onClick={handleSearchClick} secondary>
          Search
        </Button>
      </div>
    </div>
  )
}
