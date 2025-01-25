import { useState } from "react";
import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { ArticleList } from "../ArticleList/ArticleList";
import { TPreferences } from "./NewsFeed.types";
import { useSelector } from "react-redux";
import { selectApiKeys } from "../../store/authSlice";
import { useAuthAlert } from "../../utils/useAuthAlert";

export const NewsFeed = () => {
  useAuthAlert();
  const apiKeys = useSelector(selectApiKeys);
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
