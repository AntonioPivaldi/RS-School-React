import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from 'file-saver'
import Button from './ui/Button'
import { RootState } from '../store'
import { removeAllPersons } from '../store/slices/selectedItemsSlice'

export default function ItemsControls() {
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.value,
  )
  const dispatch = useDispatch()
  const itemsAmount = Object.keys(selectedItems).length

  function unselectItems() {
    dispatch(removeAllPersons())
  }

  function downloadItems() {
    const fileName = `${itemsAmount}_person${itemsAmount > 1 ? 's' : ''}.csv`
    const csv = [
      ['Name', 'Gender', 'Height', 'Weight', 'URL'].join(','),
      ...Object.values(selectedItems).map((person) =>
        [
          person.name,
          person.gender,
          `${person.height} cm`,
          `${person.mass} kg`,
          person.url,
        ].join(','),
      ),
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })

    saveAs(blob, fileName)
  }

  if (!itemsAmount) {
    return <></>
  }

  return (
    <div className="flex gap-4">
      <Button onClick={unselectItems} secondary>
        Unselect all
      </Button>
      <Button onClick={downloadItems}>
        Download {itemsAmount} item{itemsAmount > 1 && 's'}
      </Button>
    </div>
  )
}
