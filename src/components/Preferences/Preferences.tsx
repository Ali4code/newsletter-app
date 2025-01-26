import { TPreferences, TSource } from "./Preferences.types";
import Classes from "./Preferences.module.css";
import { API_SOURCES } from "../SearchColumn/SearchColumn.constants";
import { CategorySelect } from "./CategorySelect";
import { FilterIcon } from "./assets/FilterIcon";
import { useState } from "react";

export const Preferences = ({
  preferences,
  onCategoryChange,
  onSourceChange,
}: {
  preferences: TPreferences;
  onCategoryChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    source: TSource
  ) => void;
  onSourceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={Classes.preferences_container}>
      <div
        className={Classes.filter_feed}
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <FilterIcon color={isExpanded ? "white" : "grey"} />
        (filtering is here)
      </div>
      {isExpanded && (
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
                <label
                  htmlFor={API_SOURCES[key as keyof typeof API_SOURCES].id}
                >
                  {API_SOURCES[key as keyof typeof API_SOURCES].name}
                </label>
              </div>
            ))}
          </div>
          {preferences?.sources?.includes(API_SOURCES.NEW_YORK_TIMES.id) && (
            <CategorySelect
              categories={API_SOURCES.NEW_YORK_TIMES.categories}
              onCategoryChange={onCategoryChange}
              title="Select New York Times category"
              selectedCategory={preferences.category?.newYorkTimes}
              source={API_SOURCES.NEW_YORK_TIMES.id}
            />
          )}
          {preferences?.sources?.includes(API_SOURCES.THE_GUARDIAN.id) && (
            <CategorySelect
              categories={API_SOURCES.THE_GUARDIAN.categories}
              onCategoryChange={onCategoryChange}
              title="Select The Guardian category"
              selectedCategory={preferences.category?.theGuardian}
              source={API_SOURCES.THE_GUARDIAN.id}
            />
          )}
          {preferences?.sources?.includes(API_SOURCES.THE_NEWS_API_ORG.id) && (
            <CategorySelect
              categories={API_SOURCES.THE_NEWS_API_ORG.categories}
              onCategoryChange={onCategoryChange}
              title="Select NewsApi.org category"
              selectedCategory={preferences.category?.newsApiOrg}
              source={API_SOURCES.THE_NEWS_API_ORG.id}
            />
          )}
        </div>
      )}
    </div>
  );
};
