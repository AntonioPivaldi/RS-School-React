import { mockPeople } from '../utils/mocks/mockApiResponses'
import { API_HOST } from '../utils/env/env'

export default async function getPeople(params = '') {
  const url = `${API_HOST}people/${arguments.length ? '?' : ''}${params}`
  const res = await fetch(url)

  return res.json() || mockPeople
}
