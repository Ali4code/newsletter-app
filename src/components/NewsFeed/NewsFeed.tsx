import { useState } from "react";
import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { ArticleRow } from "../ArticleRow/ArticleRow";
import Classes from "./NewsFeed.module.css";
import { ArticleRowSkeleton } from "../ArticleRow/ArticleRow.skeleton";

export const NewsFeed = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [preferences, setPreferences] = useState({
    category: "general",
  });

  const { data, isLoading } = useGetHeadlinesNewsApiOrgQuery(
    {
      apiKey: apiKeys?.newsApiOrg,
      category: "general",
    },
    { skip: !apiKeys?.newsApiOrg }
  );
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
