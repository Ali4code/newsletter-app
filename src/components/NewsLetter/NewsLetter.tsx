import { SearchColumn } from "../SearchColumn/SearchColumn";
import Classes from "./NewsLetter.module.css";


export const NewsLetter = () => {
  return (
    <div className={Classes.newsletter_container}>
      <SearchColumn />
    </div>
  );
};
