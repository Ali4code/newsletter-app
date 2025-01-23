import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsLetterApi";
import { useGetApiKeys } from "../../utils/useGetApiKeys";
import { ArticleRow } from "../ArticleRow/ArticleRow";
import Classes from "./NewsFeed.module.css";

export const NewsFeed = () => {
  const { apiKeys } = useGetApiKeys();
  const { data, isLoading } = useGetHeadlinesNewsApiOrgQuery({
    apiKey: apiKeys.newsApiOrg,
    category: "general",
  });
  return (
    <div className={Classes.newsFeed_container}>
      <h2>News Feed</h2>

      {isLoading && <div>Loading...</div>}

      {data?.articles.map((article) => (
        <ArticleRow key={article.title} article={article} />
      ))}
    </div>
  );
};
