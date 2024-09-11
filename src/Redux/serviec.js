import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const shopApiSlice = createApi({
  reducerPath:"shopApi",
  baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_APP_BASE_URL}),
  endpoints:(builder)=>({
    register:builder.mutation({
      query:(userData)=>({
        url:"/user/register",
        method:"POST",
        body: userData
      }),
      // providesTags:["products"]  
    }),
    login:builder.mutation({
      query:(userData)=>({
        url:`/user/login`,
        method:"POST",
        body:userData
      })
    })
  })
})

export default shopApiSlice
export const {useRegisterMutation, useLoginMutation} = shopApiSlice
