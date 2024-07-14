import { useNavigate, useParams } from 'react-router-dom'
import Button from '../ui/Button'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import getPerson from '../../api/getPerson'
import { PeopleResponse, Person } from '../../utils/types/api'
import Spinner from '../ui/Spinner'
import RequestFail from '../RequestFail'

export default function Details() {
  const navigate = useNavigate()
  const { name } = useParams()
  const [peopleRes, setPeopleRes] = useState<PeopleResponse | null>(null)
  const [person, setPerson] = useState<Person | null>(null)

  function goBack() {
    navigate(-1)
  }

  function handleOverlayClick(e: BaseSyntheticEvent) {
    if (e.target.id === 'details-overlay') {
      goBack()
    }
  }

  async function requestPerson() {
    const res = (await getPerson(name!.split('_').join(' '))) as PeopleResponse
    setPeopleRes(res)
    setPerson(res.results[0])
  }

  useEffect(() => {
    requestPerson()
  }, [])

  return (
    <section
      className="absolute right-0 top-0 flex h-full w-full cursor-pointer justify-end bg-gray-200 bg-opacity-55"
      id="details-overlay"
      onClick={handleOverlayClick}
    >
      <div className="flex w-80 cursor-default flex-col gap-4 bg-gray-300 p-4">
        <div className="flex justify-end">
          <Button onClick={goBack} secondary>
            Close
          </Button>
        </div>
        {!peopleRes ? (
          <div className="flex h-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div>
            {peopleRes?.isMock && <RequestFail />}
            <div className="mt-4 flex flex-col gap-2">
              <p>Name: {person?.name || 'N/A'}</p>
              <p>Gender: {person?.gender || 'N/A'}</p>
              <p>Birth year: {person?.birth_year || 'N/A'}</p>
              <p>Eye color: {person?.eye_color || 'N/A'}</p>
              <p>Hair color: {person?.hair_color || 'N/A'}</p>
              <p>Skin color: {person?.skin_color || 'N/A'}</p>
              <p>Height: {`${person?.height} cm` || 'N/A'}</p>
              <p>Weight: {`${person?.mass} kg` || 'N/A'}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
