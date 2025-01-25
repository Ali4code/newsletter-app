import { useState } from "react";
import { Sidebar } from "../SideBar/SideBar";
import { Navbar } from "./Navbar";

export const NavbarContainer = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isSideBarOpen={isSideMenuOpen}
        setIsSideBarOpen={setIsSideMenuOpen}
      />
      <Sidebar isOpen={isSideMenuOpen} />
    </>
  );
};
