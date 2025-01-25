import { useState } from "react";
import Classes from "./Tabs.module.css";
// import { NewsFeed } from "../NewsFeed/NewsFeed";
import { TApiKeys } from "../../utils/useGetApiKeys";
// import { SearchFeed } from "../SearchFeed/SearchFeed";

export const Tabs = ({
  tabs,
  selectedTab,
  onSelectTab,
}: {
  tabs: Record<string, { name: string; color: string }>;
  onSelectTab: (tab: string) => void;
  selectedTab: string;
}) => {
  return (
    <div className="flex_col">
      <div className={Classes.tabs_header_container}>
        {Object.keys(tabs)?.map((key) => (
          <div key={key} className={`${Classes.navbar_tabs} ${Classes.red}`}>
            {tabs[key].name}
          </div>
        ))}
      </div>
    </div>
  );
};
