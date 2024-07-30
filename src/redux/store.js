import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './apis/authApi';
import authSlice from './slices/authSlice';
import { adminApi } from './apis/admin';
import publicSlice from './slices/publicSlice';
import { orderApi } from './apis/orderApi';
import { msgApi } from './apis/msgApi';

const reduxStore = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [msgApi.reducerPath]: msgApi.reducer,
    auth: authSlice,
    public: publicSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      adminApi.middleware,
      orderApi.middleware,
      msgApi.middleware,
    ),
});

export default reduxStore;
