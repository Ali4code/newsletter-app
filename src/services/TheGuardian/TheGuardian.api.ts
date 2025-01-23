import {
  TNewsApiOrgResponse,
  TSearchNewsApiOrgRequest,
  TSourcesNewsApiOrgResponse,
  TTopHeadlinesNewsApiOrgRequest,
} from "./TheGuardian.types";
import { BaseApi } from "../../store/store";

export const TheGuardianApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchGuardian: builder.query<
      TNewsApiOrgResponse,
      TSearchNewsApiOrgRequest
    >({
      query: ({ apiKey, searchParam, from, to }) => ({
        url: `content.guardianapis.com/search?q=${searchParam}&from-date=${from}&to-date=${to}&api-key=${apiKey}`,
      }),
    }),
    getHeadlinesNewsApiOrg: builder.query<
      TNewsApiOrgResponse,
      TTopHeadlinesNewsApiOrgRequest
    >({
      query: ({ apiKey, category, sources }) => ({
        url: category
          ? `"https://newsapi.org/v2/top-headlines?category=${category}`
          : `"https://newsapi.org/v2/top-headlines?sources=${sources}`,
      }),
    }),
    getSourcesNewsApiOrg: builder.query<TSourcesNewsApiOrgResponse, string>({
      query: (apiKey) => ({
        url: "https://newsapi.org/v2/top-headlines/sources",
      }),
    }),
  }),
});

export const {
  useGetHeadlinesNewsApiOrgQuery,
  useGetSourcesNewsApiOrgQuery,
  useSearchGuardianQuery,
} = TheGuardianApi;
