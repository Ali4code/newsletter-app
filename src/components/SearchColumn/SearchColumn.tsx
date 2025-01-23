import { useState } from "react";
import Classes from "./SearchColumn.module.css";
import { TApiKeys } from "../../utils/useGetApiKeys";

export const SearchColumn = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [searchFields, setSearchFields] = useState({});
  return (
    <div className={Classes.search_column}>
      <div>Search for articles</div>
      <div>
        select your source:
        <input type="text"></input>
        <button>Search</button>
      </div>
    </div>
  );
};
