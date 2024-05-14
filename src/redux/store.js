import { configureStore } from "@reduxjs/toolkit";
import { exerciseApi } from "./exercise";
import { youtubeApi } from "./youtube";

export const store = configureStore({
  reducer: {
    [exerciseApi.reducerPath]: exerciseApi.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      exerciseApi.middleware,
      youtubeApi.middleware
    ),
});
