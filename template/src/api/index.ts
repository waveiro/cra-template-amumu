import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store/';

export const apiConfig = createApi({
  tagTypes: ['Invites'],
  baseQuery: fetchBaseQuery({
    baseUrl: '[BASEURL]',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).login.authenticated?.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({})
});
