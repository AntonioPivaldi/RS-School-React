import { useRouteError } from 'react-router-dom'

export default function ErrorBoundary() {
  const error = useRouteError() as Error
  return (
    <div className="flex h-dvh flex-col gap-6 bg-[#0074D0] pl-40 text-white">
      <div className="mt-28">
        <p className="text-[10rem]">{':('}</p>
        <div className="text-[2rem]">
          <p>Error message: "{error.message || 'Something went wrong...'}"</p>
          <p>
            {'Lorem ipsum, yada yada. Please, be more careful next time! :)'}
          </p>
        </div>
      </div>
    </div>
  )
}
