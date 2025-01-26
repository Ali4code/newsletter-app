import { useEffect, useState } from "react";
import {
  TCategory,
  TPreferences,
  TSource,
  TWebState,
} from "./Preferences.types";
import Classes from "./Preferences.module.css";
import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";
import { WEBPAGE_STATE_LOCAL_STORAGE_KEY } from "../../constants";
import { CATEGORIES } from "../../services/NewsApi/NewsApi.constants";

export const Preferences = () => {
  // to keep the preferences in local storage to prevent user losing their selected filters
  const prevWebState = JSON.parse(
    localStorage.getItem(WEBPAGE_STATE_LOCAL_STORAGE_KEY) ?? "{}"
  ) as TWebState;
  const [preferences, setPreferences] = useState<TPreferences>(
    prevWebState?.preferences ?? {}
  );

  useEffect(() => {
    const webpageState = {
      ...prevWebState,
      preferences,
    };
    localStorage.setItem(
      WEBPAGE_STATE_LOCAL_STORAGE_KEY,
      JSON.stringify(webpageState)
    );
  }, [preferences, prevWebState]);

  const onSourceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as TSource;
    setPreferences((prev) => {
      const sources = [...(prev?.sources ?? [])];
      if (sources.includes(value)) {
        sources.splice(sources.indexOf(value), 1);
      } else {
        sources.push(value);
      }
      return { ...prev, sources: sources };
    });
  };

  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as TCategory;
    setPreferences((prev) => ({
      ...prev,
      category: value as TCategory,
    }));
  };

  return (
    <div className={Classes.preferences}>
      <div className={Classes.source}>
        Select sources:
        {Object.keys(API_SOURCES).map((key) => (
          <div key={API_SOURCES[key as keyof typeof API_SOURCES].id}>
            <input
              type="checkbox"
              id={API_SOURCES[key as keyof typeof API_SOURCES].id}
              name="source"
              value={API_SOURCES[key as keyof typeof API_SOURCES].id}
              onChange={onSourceChange}
              checked={
                preferences.sources?.includes(
                  API_SOURCES[key as keyof typeof API_SOURCES].id
                ) || false
              }
            />
            <label htmlFor={API_SOURCES[key as keyof typeof API_SOURCES].id}>
              {API_SOURCES[key as keyof typeof API_SOURCES].name}
            </label>
          </div>
        ))}
      </div>

      <div className={Classes.category}>
        Select category:
        <select
          name="category"
          onChange={onCategoryChange}
          value={preferences?.category || "none"}
        >
          <option value="none" disabled>
            Select a Category
          </option>
          {Object.keys(CATEGORIES).map((key) => (
            <option
              key={CATEGORIES[key as keyof typeof CATEGORIES]}
              value={CATEGORIES[key as keyof typeof CATEGORIES]}
            >
              {CATEGORIES[key as keyof typeof CATEGORIES]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
