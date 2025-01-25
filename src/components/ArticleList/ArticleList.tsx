import { ArticleRow } from "../ArticleRow/ArticleRow";
import { ArticleRowSkeleton } from "../ArticleRow/ArticleRow.skeleton";
import Classes from "./ArticleList.module.css";

export const ArticleList = ({ isLoading, articles }) => {
  return (
    <div className={Classes.news_feed_container}>
      {isLoading && (
        <>
          {Array.from({ length: 5 }).map((_, index) => (
            <ArticleRowSkeleton key={index} />
          ))}
        </>
      )}

      {data?.articles?.map((article) => (
        <ArticleRow key={article.title} article={article} />
      ))}
    </div>
  );
};
