import {
  TGuardianResponse,
  TSearchGuardianRequest,
} from "./TheGuardian.types";
import { BaseApi } from "../../store/store";

export const TheGuardianApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchGuardian: builder.query<TGuardianResponse, TSearchGuardianRequest>({
      query: ({ apiKey, searchParam, from, to }) => ({
        url:
          `content.guardianapis.com/search?api-key=${apiKey}&` +
          (from ? `&from-date=${from}` : "") +
          (to ? `&to-date=${to}` : "") +
          (searchParam ? `&q=${searchParam}` : ""),
      }),
    }),
  }),
});

export const { useSearchGuardianQuery, useLazySearchGuardianQuery } =
  TheGuardianApi;
