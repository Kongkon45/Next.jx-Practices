import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath : "postsApi",
    baseQuery : fetchBaseQuery({baseUrl :"http://localhost:5000"}),
    endpoints : (builder) => ({
        getAllPost : builder.query({
            query : ()=> "/posts"
        }),
        getPost : builder.query({
            query : (id)=> `/posts/${id}`
        })
    })
})

export const {useGetAllPostQuery, useGetPostQuery} = postsApi;