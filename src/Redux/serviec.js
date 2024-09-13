import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const shopApiSlice = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  tagTypes: ['customer'],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData
      }),
      // providesTags:["products"]  
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: `/user/login`,
        method: "POST",
        body: userData
      })
    }),
    getCustomer: builder.query({
      query: ({ token }) => ({
        url: `/customer/getAllCustomer`,
        method: "GET",
        headers: { "x-access-token": token }
      }),
      providesTags: ['customer']
    }),
    customer: builder.mutation({
      query: ({ customerData, token }) => ({
        url: `/customer/createCustomer`,
        method: "POST",
        body: customerData,
        headers: { "x-access-token": token }
      }),
      invalidatesTags: ['customer']
    }),

    customerDelete: builder.mutation({
      query: ({ token, id }) => ({
        url: `/customer/deleteCustomer/${id}`,
        method: "DELETE",
        headers: { "x-access-token": token },

      }),
      invalidatesTags: ['customer']
    }),
    customerEdit: builder.mutation({
      query: ({ customerData,token, id }) => ({
        url: `/customer/editCustomer/${id}`,
        method: "PATCH",
        body: customerData,
        headers: { "x-access-token": token },
      }),
      invalidatesTags: ['customer']
    }),
  })
})

export default shopApiSlice
export const {
  useRegisterMutation,
  useLoginMutation,
  useCustomerMutation,
  useGetCustomerQuery,
  useCustomerDeleteMutation,
  useCustomerEditMutation
} = shopApiSlice
