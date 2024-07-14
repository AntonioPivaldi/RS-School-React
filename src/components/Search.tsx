import { BaseSyntheticEvent, useState } from 'react'
import Button from './ui/Button'

interface SearchProps {
  searchString: string
  setSearchString: (str: string) => void
}

export default function Search({ searchString, setSearchString }: SearchProps) {
  const [inputValue, setInputValue] = useState(searchString)

  function handleInputChange(e: BaseSyntheticEvent) {
    const value = e.target.value
    setInputValue(value)
  }

  function handleSearchClick() {
    setSearchString(inputValue)
  }

  return (
    <div className="flex items-center gap-6">
      <div>
        <input
          className="rounded-lg border border-gray-200 px-2 py-[6px] outline-none"
          placeholder="Search..."
          type="text"
          value={inputValue}
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
