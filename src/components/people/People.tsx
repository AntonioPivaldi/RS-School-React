import { PeopleResponse } from '../../utils/types/api'
import PersonCard from './PersonCard'
import Spinner from '../ui/Spinner'

interface PeopleProps {
  peopleRes: PeopleResponse | null
}

export default function People({ peopleRes }: PeopleProps) {
  const people = peopleRes?.results

  if (!people) {
    return (
      <div className="flex h-20 items-center">
        <Spinner />
      </div>
    )
  }

  if (!people.length) {
    return <h2>No such person you're searching for</h2>
  }

  return (
    <>
      <div className="flex w-full flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {people.map((person) => (
          <PersonCard person={person} key={person.name} />
        ))}
      </div>
    </>
  )
}
