import { Tabs } from "../Tabs/Tabs";
import Classes from "./SideBar.module.css";

export const Sidebar = ({
  isOpen,
  tabs,
}: {
  isOpen: boolean;
  tabs: Record<string, { name: string; color: string }>;
}) => {
  if (!isOpen) return <></>;
  return (
    <div className={Classes.sidebar_container}>
      <Tabs tabs={tabs} />
    </div>
  );
};
