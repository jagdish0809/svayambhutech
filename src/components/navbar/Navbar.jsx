import React, {useState} from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
    const [showmenu, setshowMenu] = useState(false)
    const shownavlinks = () => {
        setshowMenu(!showmenu)
    }
  return (
    <>
      <nav
        className={
          showmenu
            ? `m-4 fixed bg-white shadow-lg border active`
            : `m-4 fixed bg-white shadow-lg border`
        }
      >
        <ul className="flex justify-evenly desktop-nav items-center py-2">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>
            <img src={logo} className="w-40" alt="" />
          </li>
          <li>Projects</li>
          <li>Features</li>
          <li>Contact us</li>
        </ul>

        <ul className="mobile-nav flex items-center justify-between px-10 py-2">
          <li>
            <img src={logo} className="w-40" alt="" />
          </li>
          <li
            className={
              showmenu
                ? `flex flex-col justify-center hamburger`
                : `flex flex-col justify-between hamburger`
            }
            onClick={shownavlinks}
          >
            <span
              className={showmenu ? `rotate-45 w-9 relative` : `w-9`}
            ></span>
            <span className={showmenu ? `hidden` : `block w-9`}></span>
            <span
              className={showmenu ? `-rotate-45 w-9 absolute` : `w-9`}
            ></span>
          </li>
        </ul>
        <ul className={showmenu ? `w-full flex flex-col items-center mobile-links` : `hidden`}>
          <li className="m-2">Home</li>
          <li className="m-2">About</li>
          <li className="m-2">Service</li>
          <li className="m-2">Projects</li>
          <li className="m-2">Features</li>
          <li className="m-2">Contact us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
