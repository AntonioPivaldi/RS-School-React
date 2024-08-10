import React, { useEffect, useState } from 'react'
import { PAGE_KEY } from '../constants'

export default function usePageNumber() {
  const [pageNumber, setPageNumber] = useState(
    Number(sessionStorage.getItem(PAGE_KEY) || '1'),
  )

  useEffect(() => {
    sessionStorage.setItem(PAGE_KEY, `${pageNumber}`)
  }, [pageNumber])

  return [pageNumber, setPageNumber] as [
    number,
    React.Dispatch<React.SetStateAction<number>>,
  ]
}
