import { Tabs } from "../Tabs/Tabs";
import Classes from "./SideBar.module.css";

export const Sidebar = ({
  isOpen,
  onTabSelect,
  selectedTab,
  tabs,
}: {
  isOpen: boolean;
  selectedTab: string;
  onTabSelect: (tab: string) => void;
  tabs: Record<string, { name: string; color: string }>;
}) => {
  if (!isOpen) return <></>;
  return (
    <div className={Classes.sidebar_container}>
      <Tabs tabs={tabs} onTabSelect={onTabSelect} selectedTab={selectedTab} />
    </div>
  );
};
