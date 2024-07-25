import { useDispatch, useSelector } from 'react-redux'
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
    console.log(selectedItems)
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