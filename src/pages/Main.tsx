import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { RootState } from '../store'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'
import People from '../components/people/People'
import Pagination from '../components/Pagination'
import FailedRequestMessage from '../components/FailedRequestMessage'
import ThemeSwitch from '../components/ThemeSwitch'
import ItemsControls from '../components/ItemsControls'
import getPeople from '../api/getPeople'
import { PeopleResponse } from '../utils/types/api'
import useSearchString from '../utils/hooks/useSearchString'

export default function MainPage() {
  const [, setSearchParams] = useSearchParams()
  const [peopleRes, setPeopleRes] = useState<PeopleResponse | null>(null)
  const [searchString, setSearchString] = useSearchString()
  const pageNumber = useSelector((state: RootState) => state.page.value)
  const isInitialLoad = useRef(true)

  async function search() {
    const params = new URLSearchParams({
      search: searchString,
      page: `${pageNumber}`,
    })

    setPeopleRes(null)
    setSearchParams(params)
    const res = await getPeople(params.toString())
    setPeopleRes(res)
  }

  useEffect(() => {
    if (!isInitialLoad.current) {
      search()
    } else {
      isInitialLoad.current = false
    }
  }, [searchString])

  useEffect(() => {
    search()
  }, [pageNumber])

  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <section className="flex justify-between">
        <div className="flex flex-col gap-6">
          <Search
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <div className="flex gap-6">
            <ThemeSwitch />
            <ErrorButton />
          </div>
        </div>
        <div>
          <ItemsControls />
        </div>
      </section>
      <main className="flex flex-col items-center justify-center">
        {peopleRes?.isMock && <FailedRequestMessage />}
        <People peopleRes={peopleRes} />
        <Pagination pageNumber={pageNumber} peopleRes={peopleRes} />
      </main>
      <Outlet />
    </div>
  )
}
