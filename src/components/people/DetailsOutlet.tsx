import { useNavigate, useParams } from 'react-router-dom'
import Button from '../ui/Button'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import getPerson from '../../api/getPerson'
import { PeopleResponse } from '../../utils/types/api'
import Details from './Details'

export default function DetailsOutlet() {
  const navigate = useNavigate()
  const { name } = useParams()
  const [peopleRes, setPeopleRes] = useState<PeopleResponse | null>(null)

  function goBack() {
    navigate(-1)
  }

  function handleOverlayClick(e: BaseSyntheticEvent) {
    if (e.target.id === 'details-overlay') {
      goBack()
    }
  }

  async function requestPerson() {
    const searchName = name?.split('_').join(' ') || ''
    const res = (await getPerson(searchName)) as PeopleResponse
    setPeopleRes(res)
  }

  useEffect(() => {
    requestPerson()
  }, [])

  return (
    <section
      className="absolute right-0 top-0 flex h-full w-full cursor-pointer justify-end bg-gray-200 bg-opacity-55 dark:bg-gray-600 dark:bg-opacity-60"
      data-testid="details-overlay"
      id="details-overlay"
      onClick={handleOverlayClick}
    >
      <div className="flex w-80 cursor-default flex-col gap-4 bg-gray-300 p-4 dark:bg-gray-800">
        <div className="flex justify-end">
          <Button onClick={goBack} secondary>
            Close
          </Button>
        </div>
        <Details peopleRes={peopleRes} />
      </div>
    </section>
  )
}
