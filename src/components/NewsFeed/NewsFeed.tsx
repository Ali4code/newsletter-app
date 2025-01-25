import { useState } from "react";
import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { ArticleList } from "../ArticleList/ArticleList";
import { TPreferences } from "./NewsFeed.types";

export const NewsFeed = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [preferences, setPreferences] = useState<TPreferences>({});

  const { data, isLoading } = useGetHeadlinesNewsApiOrgQuery(
    {
      apiKey: apiKeys?.newsApiOrg,
      category: 'business'
    },
    { skip: !apiKeys?.newsApiOrg }
  );

  
  return <ArticleList isLoading={isLoading} articles={data?.articles} />;
};
