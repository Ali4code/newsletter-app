import Classes from "./SideBar.module.css";

export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return <></>;
  return (
    <div className={Classes.sidebar_container}>
      <div className={`${Classes.navbar_tabs} ${Classes.red}`}>Auth*</div>
      <div className={Classes.navbar_tabs}>Home</div>
      <div className={Classes.navbar_tabs}>Personalized</div>
    </div>
  );
};
