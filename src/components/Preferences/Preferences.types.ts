import { CATEGORIES } from "../../services/NewsApi/NewsApi.constants";
import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";

export type TSource = (typeof API_SOURCES)[keyof typeof API_SOURCES]["id"];
export type TCategory = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export type TPreferences = {
  category?: TCategory;
  sources?: TSource[];
  Authors?: string[];
};

export type TWebState = {
  selectedTab: string;
  preferences?: TPreferences;
};