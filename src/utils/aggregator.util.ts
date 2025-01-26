import { TArticle } from "../components/ArticleRow/ArticleRow";
import { TPreferences } from "../components/Preferences/Preferences.types";
import { API_SOURCES } from "../components/SearchColumn/SearchColumn.constants";
import { TNewsApiOrgResponse } from "../services/NewsApi/NewsApi.types";
import { TNewYorTimesResponse } from "../services/NewYorkTimes/NewYorkTimes.types";
import { TGuardianResponse } from "../services/TheGuardian/TheGuardian.types";

const normalizeArticles = (articles: any[]): TArticle[] => {
  return articles?.map((article) => {
    return {
      id:
        article.id ||
        article.title ||
        article.headline?.main ||
        article.webTitle, // ok
      title: article.title || article.headline?.main || article.webTitle, // ok
      content:
        article.description || article.abstract || article.fields?.trailText, // ok
      image:
        article.urlToImage ||
        article.fields?.thumbnail ||
        (article.multimedia?.[0]?.url
          ? `https://www.nytimes.com/${article.multimedia?.[0]?.url}`
          : null), // ok
      date:
        article.pub_date ||
        article.fields?.firstPublicationDate ||
        article.publishedAt, //ok
      url: article.url || article.webUrl || article.web_url, // ok
      source:
        article.source || article.fields?.publication || article.source?.name, // ok
    };
  });
};

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
}): TArticle[] => {
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

  const normalizedArticles = normalizeArticles(aggregated).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // TODO: sort aggregated by date + normalize response between 3 sources
  return normalizedArticles;
};
