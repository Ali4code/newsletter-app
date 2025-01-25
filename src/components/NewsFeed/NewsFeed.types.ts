import { CATEGORIES } from "../../services/NewsApi/NewsApi.constants";
import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";

export type TPreferences = {
  category?: (typeof CATEGORIES)[keyof typeof CATEGORIES]
  source?: (typeof API_SOURCES)[keyof typeof API_SOURCES]["id"];
  Authors?: string[];
};