import { API_HOST } from '../utils/env/env'

export default async function getPeople(search = '') {
  const params = new URLSearchParams({
    search: search,
  }).toString()
  const url = API_HOST + `people/${arguments.length ? '?' : ''}${params}`

  const res = await fetch(url)

  return res.json()
}
