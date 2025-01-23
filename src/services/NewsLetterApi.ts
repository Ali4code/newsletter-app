import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TNewsApiOrgResponse,
  TSearchNewsApiOrgRequest,
  TSourcesNewsApiOrgResponse,
  TTopHeadlinesNewsApiOrgRequest,
} from "./NewsApi.types";

export const NewsOutletsApi = createApi({
  reducerPath: "NewsOutletsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    searchNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TSearchNewsApiOrgRequest
    >({
      query: ({ apiKey, searchParam, from, to }) => ({
        url: `https://newsapi.org/v2/everything?q=${searchParam}&from=${from}&to=${to}`,
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getHeadlinesNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TTopHeadlinesNewsApiOrgRequest
    >({
      query: ({ apiKey, category, sources }) => ({
        url:
          "https://newsapi.org/v2/top-headlines?" + category
            ? `category=${category}`
            : `sources=${sources}`,
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getSourcesNewsApiOrg: builder.query<TSourcesNewsApiOrgResponse, string>({
      query: (apiKey) => ({
        url: "https://newsapi.org/v2/top-headlines/sources",
        headers: { "X-Api-Key": apiKey },
      }),
    }),
  }),
});

export const {
  useLazySearchNewsApiOrgQuery,
  useGetHeadlinesNewsApiOrgQuery,
  useLazyGetHeadlinesNewsApiOrgQuery,
  useLazyGetSourcesNewsApiOrgQuery,
} = NewsOutletsApi;
