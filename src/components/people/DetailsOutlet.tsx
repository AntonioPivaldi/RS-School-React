import { BaseSyntheticEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { peopleApi } from '../../api/peopleApi'
import Details from './Details'
import Button from '../ui/Button'

export default function DetailsOutlet() {
  const navigate = useNavigate()
  const { name } = useParams()
  const searchName = name?.split('_').join(' ') || ''
  const { data: peopleRes, isFetching } =
    peopleApi.useGetPersonByNameQuery(searchName)

  function goBack() {
    navigate(-1)
  }

  function handleOverlayClick(e: BaseSyntheticEvent) {
    if (e.target.id === 'details-overlay') {
      goBack()
    }
  }

  return (
    <section
      className="absolute right-0 top-0 flex h-full w-full cursor-pointer justify-end bg-gray-200 bg-opacity-55 dark:bg-gray-600 dark:bg-opacity-60"
      data-testid="details-overlay"
      id="details-overlay"
      onClick={handleOverlayClick}
    >
      <div className="flex w-80 cursor-default flex-col gap-4 bg-gray-300 p-4 dark:bg-gray-800">
        <div className="flex justify-end">
          <Button onClick={goBack} secondary>
            Close
          </Button>
        </div>
        <Details isFetching={isFetching} peopleRes={peopleRes} />
      </div>
    </section>
  )
}
