import spinner from '../../assets/icons/spinner.png'

export default function Spinner() {
  return (
    <div className="relative h-10 w-10" data-testid="spinner">
      <div className="absolute w-10 animate-spin dark:invert">
        <img src={spinner} />
      </div>
    </div>
  )
}
