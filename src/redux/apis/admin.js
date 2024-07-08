import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL, credentials: "include" }),
    tagTypes: ["user"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/get",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["user"],

            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/api/admin/new",
                        method: "POST",
                        body: userData
                    }
                },
                providesTags: ["user"],

            }),
            updateUser: builder.mutation({
                query: userData => {
                    return {
                        url: `/api/admin/update-user/${userData._id}`,
                        method: "PUT",
                        body: userData
                    }
                },
                providesTags: ["user"],

            }),
            deleteUser: builder.mutation({
                query: id => {
                    return {
                        url: `/api/admin/delete-user/${_id}`,
                        method: "DELETE",
                        // body: userData
                    }
                },
                providesTags: ["user"],

            }),

            getAllProucts: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/products",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["products"],

            }),
            addproduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/api/admin/add-product",
                        method: "POST",
                        body: productData
                    }
                },
                providesTags: ["products"],

            }),
            updateProduct: builder.mutation({
                query: productData => {
                    return {
                        url: `/api/admin/update-product/${productData._id}`,
                        method: "PUT",
                        body: productData
                    }
                },
                providesTags: ["products"],

            }),
            deleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/api/admin/delete-product/${id}`,
                        method: "DELETE",
                        // body: productData
                    }
                },
                providesTags: ["products"],

            }),

            getAllOrders: builder.query({
                query: () => {
                    return {
                        url: "/api/admin/order",
                        method: "GET"
                    }
                },
                transformResponse: data => data.result,
                providesTags: ["orders"],

            }),



        }
    }
})

export const { useGetUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,

    useAddproductMutation,
    useGetAllProuctsQuery
    , useUpdateProductMutation,
    useDeleteProductMutation,

    useGetAllOrdersQuery 

} = adminApi
