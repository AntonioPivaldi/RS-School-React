import React, { useEffect, useState } from 'react'
import { SEARCH_KEY } from '../constants'

export default function useSearchString() {
  const [searchString, setSearchString] = useState(
    localStorage.getItem(SEARCH_KEY) || '',
  )

  useEffect(() => {
    localStorage.setItem(SEARCH_KEY, searchString)
  }, [searchString])

  return [searchString, setSearchString] as [
    string,
    React.Dispatch<React.SetStateAction<string>>,
  ]
}
