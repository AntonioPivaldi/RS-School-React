import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import { RootState } from '../store'
import { resetPage } from '../store/slices/currentPageSlice'
import { peopleApi } from '../api/peopleApi'
import ErrorButton from '../components/ErrorButton'
import Search from '../components/Search'
import People from '../components/people/People'
import Pagination from '../components/Pagination'
import FailedRequestMessage from '../components/FailedRequestMessage'
import ThemeSwitch from '../components/ThemeSwitch'
import ItemsControls from '../components/ItemsControls'
import Spinner from '../components/ui/Spinner'
import useSearchString from '../utils/hooks/useSearchString'

export default function MainPage() {
  const dispatch = useDispatch()
  const pageNumber = useSelector((state: RootState) => state.page.value)
  const [, setSearchParams] = useSearchParams()
  const [searchString, setSearchString] = useSearchString()
  const { data: peopleRes, isFetching: arePeopleLoading } =
    peopleApi.useGetPeopleQuery(getNewParams().toString())
  const isInitialLoad = useRef(true)

  function getNewParams() {
    return new URLSearchParams({
      search: searchString,
      page: `${pageNumber}`,
    })
  }

  function updateSearchParams() {
    const params = getNewParams()
    setSearchParams(params)
  }

  useEffect(() => {
    if (pageNumber !== 1) {
      dispatch(resetPage())
    } else if (!isInitialLoad.current) {
      updateSearchParams()
    } else {
      isInitialLoad.current = false
    }
  }, [searchString])

  useEffect(() => {
    updateSearchParams()
  }, [pageNumber])

  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <section className="flex flex-col justify-between gap-6 lg:flex-row">
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
        {arePeopleLoading ? (
          <div className="flex h-20 items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <People peopleRes={peopleRes} />
            <Pagination pageNumber={pageNumber} peopleRes={peopleRes} />
          </>
        )}
      </main>
      <Outlet />
    </div>
  )
}
