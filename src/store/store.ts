import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { NewsOrgApi } from "../services/NewsApi/NewsApi.api";

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(NewsOrgApi.middleware);

const reducer = {
  [NewsOrgApi.reducerPath]: NewsOrgApi.reducer,
};

const config = {
  reducer,
  middleware,
};

export const store = configureStore(config);

export type TAppDispatch = typeof store.dispatch;

export type TRootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => TAppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
