import React from 'react'
import { PeopleResponse } from '../utils/types/api'
import PersonCard from './PersonCard'
import Spinner from './ui/Spinner'

interface PeopleProps {
  peopleRes: PeopleResponse | null
}

export default class People extends React.Component<PeopleProps> {
  constructor(props: PeopleProps) {
    super(props)
  }

  render() {
    const people = this.props.peopleRes?.results

    if (!people) {
      return (
        <div className="flex items-center h-20">
          <Spinner />
        </div>
      )
    }

    if (!people.length) {
      return <h2>No such person you're searching for</h2>
    }

    return (
      <>
        <div className="flex flex-col gap-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {people.map((person) => (
            <PersonCard person={person} key={person.name} />
          ))}
        </div>
      </>
    )
  }
}
