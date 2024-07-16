import { useEffect, useRef, useState } from 'react'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'
import People from '../components/people/People'
import getPeople from '../api/getPeople'
import { PeopleResponse } from '../utils/types/api'
import { Outlet, useSearchParams } from 'react-router-dom'
import Pagination from '../components/Pagination'
import useSearchString from '../utils/hooks/useSearchString'
import usePageNumber from '../utils/hooks/usePageNumber'
import FailedRequestMessage from '../components/FailedRequestMessage'

export default function MainPage() {
  const [, setSearchParams] = useSearchParams()
  const [peopleRes, setPeopleRes] = useState<PeopleResponse | null>(null)
  const [searchString, setSearchString] = useSearchString()
  const [pageNumber, setPageNumber] = usePageNumber()
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
    if (pageNumber !== 1) {
      setPageNumber(1)
    } else if (!isInitialLoad.current) {
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
      <section className="flex flex-col gap-6">
        <Search searchString={searchString} setSearchString={setSearchString} />
        <div>
          <ErrorButton />
        </div>
      </section>
      <main className="flex flex-col items-center justify-center">
        {peopleRes?.isMock && <FailedRequestMessage />}
        <People peopleRes={peopleRes} />
        <Pagination
          pageNumber={pageNumber}
          peopleRes={peopleRes}
          setPageNumber={setPageNumber}
        />
      </main>
      <Outlet />
    </div>
  )
}
