import { TArticle } from "../components/ArticleRow/ArticleRow";
import { TNewsApiOrgResponse } from "../services/NewsApi/NewsApi.types";
import { TNewYorTimesResponse } from "../services/NewYorkTimes/NewYorkTimes.types";
import { TGuardianResponse } from "../services/TheGuardian/TheGuardian.types";

export const getAggregatedNews = ({
  newsApiData,
  newYorkTimesData,
  guardianData,
}: {
  newsApiData?: TNewsApiOrgResponse;
  newYorkTimesData?: TNewYorTimesResponse;
  guardianData?: TGuardianResponse;
}): TArticle => {
  const aggregated = [
    ...(newsApiData?.articles || []),
    ...(newYorkTimesData?.response?.docs || []),
    ...(guardianData?.response?.results || []),
  ];

  return aggregated;
};
