import { useState } from "react";
import Classes from "./Tabs.module.css";
import { NewsFeed } from "../NewsFeed/NewsFeed";
import { TApiKeys } from "../../utils/useGetApiKeys";
import { SearchFeed } from "../SearchFeed/SearchFeed";

export const Tabs = ({ apiKeys }: { apiKeys: TApiKeys }) => {
  const [currentTab, setCurrentTab] = useState<"feed" | "search">("feed");
  const isFeedSelected = currentTab === "feed";

  return (
    <div className="flex_col">
      <div className={Classes.tabs_header_container}>
        <div
          className={
            isFeedSelected ? Classes.selected_tab : Classes.unselected_tab
          }
          onClick={() => setCurrentTab("feed")}
        >
          News Feed
        </div>
        <div
          className={
            !isFeedSelected ? Classes.selected_tab : Classes.unselected_tab
          }
          onClick={() => setCurrentTab("search")}
        >
          Search Articles
        </div>
      </div>
      <div className={Classes.feed_container}>
        {isFeedSelected ? (
          <NewsFeed apiKeys={apiKeys} />
        ) : (
          <SearchFeed apiKeys={apiKeys} />
        )}
      </div>
    </div>
  );
};
