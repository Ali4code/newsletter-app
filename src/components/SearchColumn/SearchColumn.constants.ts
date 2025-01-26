import { NEWS_API_CATEGORIES } from "../../services/NewsApi/NewsApi.constants";
import { NY_CATEGORIES } from "../../services/NewYorkTimes/NewYorkTimes.constants";

export const API_SOURCES = {
  NEW_YORK_TIMES: {
    name: "New York Times",
    id: "newYorkTimes",
    categories: NY_CATEGORIES,
  },
  THE_GUARDIAN: { name: "The Guardian", id: "theGuardian" },
  THE_NEWS_API_ORG: {
    name: "News Api Org",
    id: "newsApiOrg",
    categories: NEWS_API_CATEGORIES,
  },
} as const;
