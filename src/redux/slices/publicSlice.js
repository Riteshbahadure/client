import { createSlice } from "@reduxjs/toolkit";

const publicSlice = createSlice({
    name: "publicSlice",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cart = [...state.cart, payload]
        },
        emptyCart: (state, { payload }) => {
            state.cart = []
        },
    },
    extraReducers: builder => builder


})

export const { addToCart, emptyCart } = publicSlice.actions
export default publicSlice.reducer