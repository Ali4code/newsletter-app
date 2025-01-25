import { Tabs } from "../Tabs/Tabs";
import { CloseIcon } from "./icons/CloseIcon";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { NewsIcon } from "./icons/NewsIcon";
import Classes from "./Navbar.module.css";

export const Navbar = ({
  isSideBarOpen,
  setIsSideBarOpen,
  onTabSelect,
  selectedTab,
  tabs
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isOpen: boolean) => void;
  selectedTab: string;
  onTabSelect: (tab: string) => void;
  tabs: { [key: string]: { name: string; color: string } };
}) => {
  return (
    <div className={Classes.navbar_container}>
      {isSideBarOpen ? (
        <CloseIcon
          color="black"
          className={Classes.mobile_icon}
          onClick={() => setIsSideBarOpen(false)}
        />
      ) : (
        <HamburgerIcon
          color="black"
          className={Classes.mobile_icon}
          onClick={() => setIsSideBarOpen(true)}
        />
      )}
      <div className={Classes.tabs_wrapper}>
        <NewsIcon />
        <Tabs tabs={tabs} onTabSelect={onTabSelect} selectedTab={selectedTab} />
      </div>
    </div>
  );
};
