import React, { PropsWithChildren } from 'react'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'
import getPeople from '../api/getPeople'
import { PeopleResponse } from '../utils/types/api'
import PersonCard from '../components/PersonCard'

interface MainState {
  peopleRes: PeopleResponse | null
}

export default class MainPage extends React.Component<object, MainState> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = {
      peopleRes: null,
    }
  }

  search = async (searchStr: string) => {
    const res = await getPeople(searchStr)
    this.setState({ peopleRes: res })
  }

  render() {
    return (
      <div className="flex flex-col gap-6 px-6 py-4">
        <section>
          <Search search={this.search} />
        </section>
        <main>
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {this.state.peopleRes?.results.map((person) => (
              <PersonCard person={person} key={person.name} />
            ))}
          </div>
        </main>
        <div>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
