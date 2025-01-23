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
    <div className={Classes.newsFeed_container}>
      <h2>News Feed</h2>

      {isLoading && (
        <div className="flex_col">
          {Array.from({ length: 5 }).map((_, index) => (
            <ArticleRowSkeleton key={index} />
          ))}
        </div>
      )}

      {data?.articles?.map((article) => (
        <ArticleRow key={article.title} article={article} />
      ))}
    </div>
  );
};
