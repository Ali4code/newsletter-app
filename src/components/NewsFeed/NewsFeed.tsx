import { useGetHeadlinesNewsApiOrgQuery } from "../../services/NewsApi/NewsApi.api";
import { ArticleList } from "../ArticleList/ArticleList";
import { useSelector } from "react-redux";
import { selectApiKeys } from "../../store/authSlice";
import { useAuthAlert } from "../../utils/useAuthAlert";
import { Preferences } from "../Preferences/Preferences";

export const NewsFeed = () => {
  useAuthAlert();
  
  const apiKeys = useSelector(selectApiKeys);
  const { data, isLoading } = useGetHeadlinesNewsApiOrgQuery(
    {
      apiKey: apiKeys?.newsApiOrg,
      category: 'business'
    },
    { skip: !apiKeys?.newsApiOrg }
  );

  
  return (
    <>
      <Preferences />
      <ArticleList isLoading={isLoading} articles={data?.articles} />;
    </>
  );
};
