import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiConfig = createApi({
  tagTypes: ['Invites'],
  baseQuery: fetchBaseQuery({
    baseUrl: '[BASEURL]',
  }),
  endpoints: () => ({})
});
