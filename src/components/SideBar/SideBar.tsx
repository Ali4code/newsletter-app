import Classes from "./SideBar.module.css";

export const Sidebar = ({
  isOpen,
}: {
  isOpen: boolean;
  selectedTab: string;
  onTabSelect: (tab: string) => void;
  tabs: Record<string, { name: string; color: string }>;
}) => {
  if (!isOpen) return <></>;
  return (
    <div className={Classes.sidebar_container}>
      <div className={`${Classes.sidebar_tabs} ${Classes.red}`}>Auth*</div>
      <div className={Classes.sidebar_tabs}>Home</div>
      <div className={Classes.sidebar_tabs}>Personalized</div>
    </div>
  );
};
