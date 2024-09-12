import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const shopApiSlice = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
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
    customer: builder.mutation({
      query: ({ customerData, token }) => ({
        url: `/customer/createCustomer`,
        method: "POST",
        body: customerData,
        headers: { "x-access-token": token }
      })
    }),
    getCustomer: builder.query({
      query: ({ token }) => ({
        url: `/customer/getAllCustomer`,
        method: "GET",
        headers: { "x-access-token": token }
      })
    }),
    customerDelete: builder.mutation({
      query: ({ token, customerId }) => ({
        url: `/customer/deleteCustomer/${customerId}`,
        method: "GET",
        headers: { "x-access-token": token }
      })
    }),
  })
})

export default shopApiSlice
export const {
  useRegisterMutation,
  useLoginMutation, useCustomerMutation,
  useGetCustomerQuery,
  useCustomerDeleteMutation 
} = shopApiSlice
