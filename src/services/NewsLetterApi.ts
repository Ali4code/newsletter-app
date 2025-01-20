import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const NewsOutletsApi = createApi({
  reducerPath: "getNewsDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getNews: builder.query<any, any>({
      query: () => ({
        url: "",
        headers: { test: "" },
      }),
    }),
  }),
});

export const { useGetNewsQuery } = NewsOutletsApi;
