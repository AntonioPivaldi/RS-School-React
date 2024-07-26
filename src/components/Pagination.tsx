import { useDispatch } from 'react-redux'
import { pageDecrement, pageIncrement } from '../store/slices/currentPageSlice'
import Button from './ui/Button'
import { PeopleResponse } from '../utils/types/api'

interface PaginationProps {
  peopleRes?: PeopleResponse
  pageNumber: number
}

export default function Pagination({ peopleRes, pageNumber }: PaginationProps) {
  const dispatch = useDispatch()

  function prevPage() {
    dispatch(pageDecrement())
  }

  function nextPage() {
    dispatch(pageIncrement())
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
