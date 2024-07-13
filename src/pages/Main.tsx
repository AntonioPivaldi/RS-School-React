import React, { PropsWithChildren } from 'react'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'
import getPeople from '../api/getPeople'
import { PeopleResponse } from '../utils/types/api'
import People from '../components/People'

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
    this.setState({ peopleRes: null })
    const res = await getPeople(searchStr)
    this.setState({ peopleRes: res })
  }

  render() {
    return (
      <div className="flex flex-col gap-6 px-6 py-4">
        <section className="flex flex-col gap-6">
          <Search search={this.search} />
          <div>
            <ErrorButton />
          </div>
        </section>
        <main className="flex flex-col items-center justify-center">
          {this.state.peopleRes?.isMock && (
            <div className="text-red-500">
              Request was unsuccessfull. Mock data is shown.
            </div>
          )}
          <People peopleRes={this.state.peopleRes} />
        </main>
      </div>
    )
  }
}
