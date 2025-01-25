import Classes from "./Navbar.module.css";
import { HamburgerIcon } from "./HamburgerIcon";

export const Navbar = () => {

  return (
    <div className={Classes.navbar_container}>
      <HamburgerIcon color='black' className={Classes.burger_icon}/>
      <div>Home</div>
      <div>Personalized</div>
    </div>
  );
};