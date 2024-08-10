import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-6">
      <h2 className="text text-4xl">Oops!</h2>
      <h3 className="text-2xl">This page is not exist</h3>
      <Link className="underline" to={'/'}>
        To main page
      </Link>
    </div>
  )
}
