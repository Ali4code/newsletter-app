import { useState } from "react";
import { Sidebar } from "../SideBar/SideBar";
import { Navbar } from "./Navbar";
import { WEBPAGE_STATE_LOCAL_STORAGE_KEY } from "../../constants";
import { TABS } from "./Navrbar.constants";

export const NavbarContainer = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  // in here we intend to store the selected tab in the local storage
  const lastSelectedTab = JSON.parse(
    localStorage.getItem(WEBPAGE_STATE_LOCAL_STORAGE_KEY) ?? "{}"
  ).selectedTab;
  const [selectedTab, setSelectedTab] = useState(lastSelectedTab);

  const onTabSelect = (tab: string) => {
    const webpageState = {
      selectedTab: tab,
    };
    localStorage.setItem(
      WEBPAGE_STATE_LOCAL_STORAGE_KEY,
      JSON.stringify(webpageState)
    );
    setSelectedTab(tab);
  };

  return (
    <>
      <Navbar
        isSideBarOpen={isSideMenuOpen}
        setIsSideBarOpen={setIsSideMenuOpen}
        selectedTab={selectedTab}
        onTabSelect={onTabSelect}
        tabs={TABS}
      />
      <Sidebar
        isOpen={isSideMenuOpen}
        selectedTab={selectedTab}
        onTabSelect={onTabSelect}
        tabs={TABS}
      />
    </>
  );
};
