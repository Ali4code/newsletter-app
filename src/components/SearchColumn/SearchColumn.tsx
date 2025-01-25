import { useState } from "react";
import Classes from "./SearchColumn.module.css";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { API_SOURCES } from "./SearchColumn.constants";
import { useLazySearchGuardianQuery } from "../../services/TheGuardian/TheGuardian.api";
import { useLazySearchNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";

export const SearchColumn = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [searchFilters, setSearchFilters] = useState<{
    searchParam?: string;
    from?: string;
    to?: string;
    source?: string;
  }>({});

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSearchFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [fetchGaurdianSearch] = useLazySearchGuardianQuery();
  const [fetchNewsApiSearch] = useLazySearchNewsApiOrgQuery();
  // const [fetchNewYorkTimesSearch] = useLAzyNew();

  const onSearch = () => {};

  return (
    <div className={Classes.search_column}>
      <div className={Classes.title}>Search for articles</div>
      <div className={Classes.input_container}>
        <label htmlFor="source">Select your source</label>
        <select
          name="source"
          onChange={onChange}
          value={searchFilters?.source || "none"}
        >
          <option value="none" disabled>
            Select your source
          </option>
          {Object.keys(API_SOURCES).map((api) => (
            <option key={api} value={api}>
              {API_SOURCES[api]}
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
        <button>Search</button>
      </div>
    </div>
  );
};
