import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";

export type TPreferences = {
  category?: string;
  source?: (typeof API_SOURCES)[keyof typeof API_SOURCES]["id"];
  Authors?: string[];
};