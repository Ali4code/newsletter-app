import { CloseIcon } from "./icons/CloseIcon";
import { HamburgerIcon } from "./icons/HamburgerIcon";
import { NewsIcon } from "./icons/NewsIcon";
import Classes from "./Navbar.module.css";

export const Navbar = ({
  isSideBarOpen,
  setIsSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSideBarOpen: (isOpen: boolean) => void;
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
        <div className={`${Classes.navbar_tabs} ${Classes.red}`}>Auth*</div>
        <div className={Classes.navbar_tabs}>Home</div>
        <div className={Classes.navbar_tabs}>Personalized</div>
      </div>
    </div>
  );
};
