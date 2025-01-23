import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsLetterApi";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { ArticleRow } from "../ArticleRow/ArticleRow";
import Classes from "./NewsFeed.module.css";

export const NewsFeed = ({ apiKeys }: { apiKeys: TApiKeys }) => {
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

      {isLoading && <div>Loading...</div>}

      {data?.articles?.map((article) => (
        <ArticleRow key={article.title} article={article} />
      ))}
    </div>
  );
};
