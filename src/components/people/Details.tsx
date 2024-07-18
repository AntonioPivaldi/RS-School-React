import Spinner from '../ui/Spinner'
import FailedRequestMessage from '../FailedRequestMessage'
import { PeopleResponse } from '../../utils/types/api'

interface DetailsProps {
  peopleRes: PeopleResponse | null
}

export default function Details({ peopleRes }: DetailsProps) {
  const person = peopleRes?.results[0]
  return (
    <>
      {!peopleRes ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {peopleRes?.isMock && <FailedRequestMessage />}
          <div className="mt-4 flex flex-col gap-2">
            <p>Name: {person?.name}</p>
            <p>Gender: {person?.gender}</p>
            <p>Birth year: {person?.birth_year}</p>
            <p>Eye color: {person?.eye_color}</p>
            <p>Hair color: {person?.hair_color}</p>
            <p>Skin color: {person?.skin_color}</p>
            <p>Height: {`${person?.height} cm`}</p>
            <p>Weight: {`${person?.mass} kg`}</p>
          </div>
        </div>
      )}
    </>
  )
}
