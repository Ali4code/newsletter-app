import { useState } from "react";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { useLazySearchGuardianQuery } from "../../services/TheGuardian/TheGuardian.api";
import { useLazySearchNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { useLazySearchNewYorkTimesQuery } from "../../services/NewYorkTimes/NewYorkTimes.api";
import { ArticleList } from "../ArticleList/ArticleList";
import { SearchColumn } from "../SearchColumn/SearchColumn";
import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";

export const SearchFeed = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchFilters, setSearchFilters] = useState<{
    searchParam?: string;
    from?: string;
    to?: string;
    source?: (typeof API_SOURCES)[keyof typeof API_SOURCES]['id'];
  }>({});

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [fetchGuardianSearch, { isLoading: isGuardianLoading }] =
    useLazySearchGuardianQuery();
  const [fetchNewsApiSearch, { isLoading: isNewsApiLoading }] =
    useLazySearchNewsApiOrgQuery();
  const [fetchNewYorkTimesSearch, { isLoading: isNewYorkTimesLoading }] =
    useLazySearchNewYorkTimesQuery();

  const isLoading =
    isGuardianLoading || isNewsApiLoading || isNewYorkTimesLoading;

  const onSearch = () => {
    switch (searchFilters.source) {
      case API_SOURCES.THE_GUARDIAN.id:
        fetchGuardianSearch({
          apiKey: apiKeys?.guardianNews,
          searchParam: searchFilters.searchParam,
          from: searchFilters.from,
          to: searchFilters.to,
        })
          .unwrap()
          .then((data) => {
            setSearchResults(data.response.results);
          });
        break;
      case API_SOURCES.THE_NEWS_API_ORG.id:
        fetchNewsApiSearch({
          apiKey: apiKeys?.newsApiOrg,
          searchParam: searchFilters.searchParam,
          from: searchFilters.from,
          to: searchFilters.to,
        })
          .unwrap()
          .then((data) => {
            setSearchResults(data.articles);
          });
        break;
      case API_SOURCES.NEW_YORK_TIMES.id:
        fetchNewYorkTimesSearch({
          apiKey: apiKeys?.nyTimes,
          searchParam: searchFilters.searchParam,
          from: searchFilters.from,
          to: searchFilters.to,
        })
          .unwrap()
          .then((data) => {
            setSearchResults(data.response.docs);
          });
        break;
    }
  };

  return (
    <div>
      <SearchColumn
        onChange={onChange}
        onSearch={onSearch}
        searchFilters={searchFilters}
      />
      <ArticleList articles={searchResults} isLoading={isLoading} />
    </div>
  );
};
