import { useState } from "react";
import Classes from "./SearchColumn.module.css";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { API_SOURCES } from "./SearchColumn.constants";
import { useLazySearchGuardianQuery } from "../../services/TheGuardian/TheGuardian.api";
import { useLazySearchNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { useLazySearchNewYorkTimesQuery } from "../../services/NewYorkTimes/NewYorkTimes.api";

export const SearchColumn = ({
  apiKeys,
  setSearchResults,
}: {
  apiKeys: TApiKeys;
  setSearchResults: (articles: any[]) => void;
}) => {
  const [searchFilters, setSearchFilters] = useState<{
    searchParam?: string;
    from?: string;
    to?: string;
    source?: (typeof API_SOURCES)[keyof typeof API_SOURCES];
  }>({});

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [fetchGuardianSearch] = useLazySearchGuardianQuery();
  const [fetchNewsApiSearch] = useLazySearchNewsApiOrgQuery();
  const [fetchNewYorkTimesSearch] = useLazySearchNewYorkTimesQuery();

  const onSearch = () => {
    switch (searchFilters.source?.id) {
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
  };

  return (
    <div className={Classes.search_column}>
      <div className={Classes.title}>Search for articles</div>
      <div className={Classes.input_container}>
        <label htmlFor="source">Select your source</label>
        <select
          name="source"
          onChange={onChange}
          value={searchFilters?.source?.id || "none"}
        >
          <option value="none" disabled>
            Select your source
          </option>
          {Object.keys(API_SOURCES).map((key) => (
            <option
              key={API_SOURCES[key as keyof typeof API_SOURCES].id}
              value={key}
            >
              {API_SOURCES[key as keyof typeof API_SOURCES].name}
            </option>
          ))}
        </select>
        <div className={Classes.input_group}>
          <label htmlFor="searchParam">search:</label>
          <input
            onChange={onChange}
            name="searchParam"
            id="searchParam"
            value={searchFilters.searchParam}
            type="text"
          ></input>
        </div>
        <div>
          <label htmlFor="from">From</label>
          <input type="date" value={searchFilters.from} />
        </div>
        <div>
          <label htmlFor="to">Ta o</label>
          <input type="date" value={searchFilters.to} />
        </div>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};
