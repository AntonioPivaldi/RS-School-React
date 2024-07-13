import { BaseSyntheticEvent, useEffect, useState } from 'react'
import Button from './ui/Button'
import useSearchString from '../utils/hooks/useSearchString'

interface SearchProps {
  search: (value: string) => void
}

export default function Search({ search }: SearchProps) {
  const [searchString, setSearchString] = useSearchString()
  const [inputValue, setInputValue] = useState('')

  function handleInputChange(e: BaseSyntheticEvent) {
    const value = e.target.value
    setInputValue(value)
  }

  function handleSearchClick() {
    setSearchString(inputValue)
  }

  useEffect(() => {
    search(searchString)
  }, [search, searchString])

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
