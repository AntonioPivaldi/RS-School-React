import { PeopleResponse } from '../../utils/types/api'
import PersonCard from './PersonCard'

interface PeopleProps {
  peopleRes?: PeopleResponse
}

export default function People({ peopleRes }: PeopleProps) {
  const people = peopleRes?.results

  if (!people?.length) {
    return <h2>No such person you're searching for</h2>
  }

  return (
    <>
      <div className="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people?.map((person) => (
          <PersonCard person={person} key={person.name} />
        ))}
      </div>
    </>
  )
}
