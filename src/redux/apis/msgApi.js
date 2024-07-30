import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const msgApi = createApi({
    reducerPath: "msgApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return  {
         getAllTodos: builder.query({
            query: () => ({
                url: "/api/msg/get",
                method: "GET",
            }),
            transformResponse: (response) => response.result,
            providesTags: ["user"],
        }),
        addTodo: builder.mutation({
            query: (userData) => ({
                url: "/api/msg/add",
                method: "POST",
                body: userData,
            }),
            transformResponse: (response) => {
                localStorage.setItem("msg", JSON.stringify(response.result));
                return response.result;
            },
        }),}
    },
});

export const { useGetAllTodosQuery, useAddTodoMutation } = msgApi;
