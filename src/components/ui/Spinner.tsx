import spinner from '../../assets/icons/spinner.png'

export default function Spinner() {
  return (
    <div className="relative w-10 h-10">
      <div className="w-10 absolute animate-spin">
        <img src={spinner} />
      </div>
    </div>
  )
}
