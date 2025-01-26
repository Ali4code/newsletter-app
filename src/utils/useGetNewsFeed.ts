import { TPreferences } from "../components/Preferences/Preferences.types";
import { useSelector } from "react-redux";
import { selectApiKeys } from "../store/authSlice";
import { useGetHeadlinesNewsApiOrgQuery } from "../services/NewsApi/NewsApi.api";
import { useSearchNewYorkTimesQuery } from "../services/NewYorkTimes/NewYorkTimes.api";
import { API_SOURCES } from "../components/SearchColumn/SearchColumn.constants";

export const useGetNewsFeed = ({
  preferences,
}: {
  preferences: TPreferences;
}) => {
  const apiKeys = useSelector(selectApiKeys);

  const { data: newsApiData, isLoading: isNewsApiLoading } =
    useGetHeadlinesNewsApiOrgQuery(
      {
        apiKey: apiKeys?.newsApiOrg,
        category: preferences.category?.newsApiOrg,
      },
      { skip: !apiKeys?.newsApiOrg || !preferences.sources?.includes(API_SOURCES.THE_NEWS_API_ORG.id) }
    );

  const { data: newYorkTimesData, isLoading: isNewYorkTimesLoading } =
    useSearchNewYorkTimesQuery(
      {
        apiKey: apiKeys?.newsApiOrg,
        category: preferences.category?.newYorkTimes,
      },
      { skip: !apiKeys?.newsApiOrg || !preferences.sources?.includes(API_SOURCES.NEW_YORK_TIMES.id)  }
    );

  return {
    data: newsApiData,
    isLoading: isNewYorkTimesLoading || isNewsApiLoading,
  };
};
