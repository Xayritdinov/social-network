import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../utils/baseUrl'
import type { GetUserByIdResponse, LoginUserPayload, LoginUserResponse, RegisterUserPayload, RegisterUserResponse } from './types'

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getUserById: builder.query<GetUserByIdResponse, number>({
            query: (user_id) => `/user?user_id=${user_id}`,
        }),
        logintUser: builder.mutation<LoginUserResponse, LoginUserPayload>({
            query: (payload) => ({
                url: "/login",
                method: 'POST',
                body: payload,
            }),
        }),
        registerUser: builder.mutation<RegisterUserResponse, RegisterUserPayload>({
            query: (payload) => ({
                url: "/registration",
                method: 'POST',
                body: payload,
            }),
        }),

    }),
})

export const {
    useGetUserByIdQuery,
    useLogintUserMutation,
    useRegisterUserMutation,
} = AuthApi