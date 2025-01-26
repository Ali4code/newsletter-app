import { TArticle } from "../components/ArticleRow/ArticleRow";
import { TPreferences } from "../components/Preferences/Preferences.types";
import { API_SOURCES } from "../components/SearchColumn/SearchColumn.constants";
import { TNewsApiOrgResponse } from "../services/NewsApi/NewsApi.types";
import { TNewYorTimesResponse } from "../services/NewYorkTimes/NewYorkTimes.types";
import { TGuardianResponse } from "../services/TheGuardian/TheGuardian.types";

export const getAggregatedNews = ({
  newsApiData,
  newYorkTimesData,
  guardianData,
  preferences,
}: {
  newsApiData?: TNewsApiOrgResponse;
  newYorkTimesData?: TNewYorTimesResponse;
  guardianData?: TGuardianResponse;
  preferences: TPreferences;
}): TArticle => {
  const isNewsOrgIncluded = preferences.sources?.includes(
    API_SOURCES.THE_NEWS_API_ORG.id
  );

  const isNewYorkTimesIncluded = preferences.sources?.includes(
    API_SOURCES.NEW_YORK_TIMES.id
  );

  const isGuardianIncluded = preferences.sources?.includes(
    API_SOURCES.THE_GUARDIAN.id
  );
  const aggregated = [
    ...((isNewsOrgIncluded && (newsApiData?.articles || [])) || []),
    ...((isNewYorkTimesIncluded && (newYorkTimesData?.response?.docs || [])) ||
      []),
    ...((isGuardianIncluded && (guardianData?.response?.results || [])) || []),
  ];

  return aggregated;
};
