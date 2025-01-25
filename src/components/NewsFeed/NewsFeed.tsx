import { useState } from "react";
import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { ArticleRow } from "../ArticleRow/ArticleRow";
import Classes from "./NewsFeed.module.css";
import { ArticleRowSkeleton } from "../ArticleRow/ArticleRow.skeleton";
import { ArticleList } from "../ArticleList/ArticleList";

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
  return <ArticleList isLoading={isLoading} articles={data?.articles} />;
};
