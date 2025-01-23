import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  TNewsApiOrgResponse,
  TSearchNewsApiOrgRequest,
  TSourcesNewsApiOrgResponse,
  TTopHeadlinesNewsApiOrgRequest,
} from "./NewYorkTimes.types";

export const NewsOrgApi = createApi({
  reducerPath: "NewsOutletsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
  endpoints: (builder) => ({
    searchNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TSearchNewsApiOrgRequest
    >({
      query: ({ apiKey, searchParam, from, to }) => ({
        url: `/everything?q=${searchParam}&from=${from}&to=${to}`,
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getHeadlinesNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TTopHeadlinesNewsApiOrgRequest
    >({
      query: ({ apiKey, category, sources }) => ({
        url: category
          ? `/top-headlines?category=${category}&apiKey=${apiKey}`
          : `/top-headlines?sources=${sources}`,
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getSourcesNewsApiOrg: builder.query<TSourcesNewsApiOrgResponse, string>({
      query: (apiKey) => ({
        url: "/top-headlines/sources",
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
} = NewsOrgApi;
