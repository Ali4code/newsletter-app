import { configureStore, Middleware } from "@reduxjs/toolkit";
import { NewsOutletsApi } from "../services/NewsLetterApi";

const middleWare = (getDefaultMiddleWare: () => Middleware[]): Middleware[] => getDefaultMiddleWare().concat(NewsOutletsApi.middleware);

const reducer = {
  [NewsOutletsApi.reducerPath]: NewsOutletsApi.reducer,
};

const config = {
  reducer,
  middleWare,
};

export const store = configureStore(config);
