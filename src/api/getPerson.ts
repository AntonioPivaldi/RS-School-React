import { API_HOST } from '../utils/env/env'
import { mockPeople } from '../utils/mocks/mockApiResponses'

export default async function getPerson(name: string) {
  const params = new URLSearchParams({
    search: name,
  })
  const url = `${API_HOST}people/?${params}`
  const res = await fetch(url)

  return res.json() || mockPeople
}
