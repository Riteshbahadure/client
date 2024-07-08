import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";
import { adminApi } from "./apis/admin";
import publicSlice from "./slices/publicSlice";
import { orderApi } from "./apis/orderApi";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        auth: authSlice,
        public: publicSlice
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        adminApi.middleware,
        orderApi.middleware
    ]
})

export default reduxStore