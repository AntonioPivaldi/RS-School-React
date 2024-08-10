import { PeopleResponse } from '../utils/types/api'
import Button from './ui/Button'

interface PaginationProps {
  peopleRes: PeopleResponse | null
  pageNumber: number
  setPageNumber: (val: number) => void
}

export default function Pagination({
  peopleRes,
  pageNumber,
  setPageNumber,
}: PaginationProps) {
  function prevPage() {
    setPageNumber((pageNumber -= 1))
  }

  function nextPage() {
    setPageNumber((pageNumber += 1))
  }

  if (!peopleRes || peopleRes.count < 11) {
    return <></>
  }

  return (
    <div className="mt-6 flex items-center gap-6">
      <Button disabled={!peopleRes.previous} onClick={prevPage}>
        Prev
      </Button>
      <div className="text-xl">{pageNumber}</div>
      <Button disabled={!peopleRes.next} onClick={nextPage}>
        Next
      </Button>
    </div>
  )
}
