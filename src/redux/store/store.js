/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "../features/SideBar/SideBarSlice";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    SideBar: SideBarReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: process.env.NODE_ENV !== "production",
});
