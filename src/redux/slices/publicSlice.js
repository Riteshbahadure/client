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
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    },
    extraReducers: builder => builder


})

export const { addToCart, emptyCart, removeFromCart } = publicSlice.actions
export default publicSlice.reducer