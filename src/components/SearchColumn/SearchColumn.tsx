import { useState } from "react";
import Classes from "./SearchColumn.module.css";
import { TApiKeys } from "../../utils/useGetApiKeys";

export const SearchColumn = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [searchFields, setSearchFields] = useState({});
  return (
    <div className={Classes.search_column}>
      <h2>Search</h2>
      <div>Search for news articles</div>
      <div>
        select your source:
        <input type="text"></input>
        <button>Search</button>
      </div>
    </div>
  );
};
