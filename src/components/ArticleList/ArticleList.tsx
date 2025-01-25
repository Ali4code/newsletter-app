import { TArticle } from "../../services/NewsApi/NewsApi.types";
import { ArticleRow } from "../ArticleRow/ArticleRow";
import { ArticleRowSkeleton } from "../ArticleRow/ArticleRow.skeleton";
import Classes from "./ArticleList.module.css";

export const ArticleList = ({
  isLoading,
  articles,
}: {
  isLoading: boolean;
  articles?: TArticle[];
}) => {
  if (!isLoading && (!articles || articles?.length === 0)) {
    return (
      <div className={Classes.news_feed_container}>Sorry nothing to show</div>
    );
  }
  return (
    <div className={Classes.news_feed_container}>
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <ArticleRowSkeleton key={index} />
          ))}
        </>
      )}

      {articles?.map((article) => (
        <ArticleRow key={article?.id ?? Math.random()} article={article} />
      ))}
    </div>
  );
};
