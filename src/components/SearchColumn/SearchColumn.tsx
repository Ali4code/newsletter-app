import Classes from "./SearchColumn.module.css";
import { API_SOURCES } from "./SearchColumn.constants";

export const SearchColumn = ({
  onChange,
  searchFilters,
  onSearch,
}: {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  searchFilters: {
    searchParam?: string;
    from?: string;
    to?: string;
    source?: (typeof API_SOURCES)[keyof typeof API_SOURCES]["id"];
  };
  onSearch: () => void;
}) => {
  console.log(555, searchFilters);
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
          {Object.keys(API_SOURCES).map((key) => (
            <option
              key={API_SOURCES[key as keyof typeof API_SOURCES].id}
              value={API_SOURCES[key as keyof typeof API_SOURCES].id}
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
            value={searchFilters?.searchParam ?? ""}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="from">From</label>
          <input
            type="date"
            name="from"
            id="from"
            value={searchFilters.from ?? ""}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input
            type="date"
            name="to"
            id="to"
            value={searchFilters.to ?? ""}
            onChange={onChange}
          />
        </div>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};
