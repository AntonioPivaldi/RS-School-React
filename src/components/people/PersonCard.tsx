import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { addPerson, removePerson } from '../../store/slices/selectedItemsSlice'
import { Person } from '../../utils/types/api'

interface CardProps {
  person: Person
}

export default function PersonCard({ person }: CardProps) {
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.value,
  )
  const dispatch = useDispatch()
  const personName = person.name.split(' ').join('_')
  const isSelected = Object.prototype.hasOwnProperty.call(
    selectedItems,
    person.name,
  )

  function handleInputChange() {
    isSelected ? dispatch(removePerson(person)) : dispatch(addPerson(person))
  }

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4">
      <h3 className="text-xl font-medium">{person.name}</h3>
      <h4 className="text-lg">Gender: {person.gender}</h4>
      <div className="flex justify-between">
        <h5>{person.height} cm</h5>
        <h5>{person.mass} kg</h5>
      </div>
      <div className="mt-4 flex justify-between">
        <NavLink className="underline" to={`details/${personName}`}>
          Details
        </NavLink>
        <label
          className="flex cursor-pointer items-center gap-2"
          htmlFor={person.url}
        >
          Select{isSelected && 'ed'}:
          <input
            className="h-4 w-4"
            checked={isSelected}
            id={person.url}
            type="checkbox"
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  )
}
