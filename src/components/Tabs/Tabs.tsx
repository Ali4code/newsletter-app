import Classes from "./Tabs.module.css";

export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelect,
}: {
  tabs: Record<string, { name: string; color: string }>;
  onTabSelect: (tab: string) => void;
  selectedTab: string;
}) => {
  return (
    <div className="flex_col">
      <div className={Classes.tabs_wrapper}>
        {Object.keys(tabs)?.map((key) => (
          <div
            key={key}
            className={selectedTab === key ? `${Classes.selected_tab}` : `${Classes.unselected_tab}`}
            onClick={() => onTabSelect(key)}
          >
            {tabs[key].name}
          </div>
        ))}
      </div>
    </div>
  );
};
