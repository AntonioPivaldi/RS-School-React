import React from 'react'
import { Person } from '../utils/types/api'

interface CardProps {
  person: Person
}

export default class PersonCard extends React.Component<CardProps> {
  render() {
    const person = this.props.person
    return (
      <div className="flex flex-col gap-2 border border-gray-200 rounded-lg p-4">
        <h3 className="text-xl font-medium">{person.name}</h3>
        <h4 className="text-lg">Gender: {person.gender}</h4>
        <div className="flex justify-between">
          <h5>{person.height} cm</h5>
          <h5>{person.mass} kg</h5>
        </div>
      </div>
    )
  }
}
