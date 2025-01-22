import Classes from "./SearchColumn.module.css";

export const SearchColumn = () => {
  return <div className={Classes.search_column}>
    <h2>Search</h2>
    <div>Search for news articles</div>
    <div>
      <input type="text"></input>
      <button>Search</button>
    </div>
  </div>;
};
