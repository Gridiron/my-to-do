import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./middlewares/local-storage-middleware";
import { reducers } from "./reducers";

const store = configureStore({
  reducer: { ...reducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
