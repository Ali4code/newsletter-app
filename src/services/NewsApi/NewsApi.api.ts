import {
  TNewsApiOrgResponse,
  TSearchNewsApiOrgRequest,
  TSourcesNewsApiOrgResponse,
  TTopHeadlinesNewsApiOrgRequest,
} from "./NewsApi.types";
import { BaseApi } from "../../store/store";

export const NewsOrgApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TSearchNewsApiOrgRequest
    >({
      query: ({ apiKey, searchParam, from, to }) => ({
        url:
          `newsapi.org/v2/everything?` +
          (from ? `&from=${from}` : "") +
          (to ? `&to=${to}` : "") +
          (searchParam ? `&q=${searchParam}` : ""),
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getHeadlinesNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TTopHeadlinesNewsApiOrgRequest
    >({
      query: ({ apiKey, category, sources }) => ({
        url: category
          ? `newsapi.org/v2/top-headlines?category=${category}`
          : `newsapi.org/v2/top-headlines?sources=${sources}`,
        headers: { "X-Api-Key": apiKey },
      }),
    }),
    getSourcesNewsApiOrg: builder.query<TSourcesNewsApiOrgResponse, string>({
      query: (apiKey) => ({
        url: "newsapi.org/v2/top-headlines/sources",
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
