import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_HOST } from '../utils/env/env'
import { PeopleResponse } from '../utils/types/api'

export const peopleApi = createApi({
  reducerPath: 'api/getPeopleQuery',
  baseQuery: fetchBaseQuery({ baseUrl: API_HOST }),
  endpoints: (builder) => ({
    getPeople: builder.query<PeopleResponse, string>({
      query: (params: string) => `people/?${params}`,
    }),
    getPersonByName: builder.query<PeopleResponse, string>({
      query: (name: string) => `people/?search=${name}`,
    }),
  }),
})
