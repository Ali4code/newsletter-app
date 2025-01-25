import {
  TNewYorTimesRequest,
  TNewYorTimesResponse,
} from "./NewYorkTimes.types";
import { BaseApi } from "../../store/store";

export const TheNewYorkTimesApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchNewYorkTimes: builder.query<
      TNewYorTimesResponse,
      TNewYorTimesRequest
    >({
      query: ({ apiKey, searchParam, from, to }) => ({
        url:
          `api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchParam}&api-key=${apiKey}` +
          (from ? `&from-date=${from}` : "") +
          (to ? `&to-date=${to}` : "") +
          (searchParam ? `&q=${searchParam}` : ""),
      }),
    }),
  }),
});

export const { useLazySearchNewYorkTimesQuery } = TheNewYorkTimesApi;
