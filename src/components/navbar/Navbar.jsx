import React, { useState } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = (props) => {
  const [showmenu, setshowMenu] = useState(false);

  const scrollSectionIntoView = (id) => {
    props.selected(id);
    setshowMenu(false)
  };

  const shownavlinks = () => {
    setshowMenu(!showmenu);
  };

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
          <img src={logo} className="w-40" alt="" />
          <li onClick={() => scrollSectionIntoView("hero")}>Home</li>
          <li onClick={() => scrollSectionIntoView("about")}>About</li>
          <li onClick={() => scrollSectionIntoView("services")}>Services</li>
          <li onClick={() => scrollSectionIntoView("projects")}>Projects</li>
          <li onClick={() => scrollSectionIntoView("contact")}>Contact us</li>
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
        <ul
          className={
            showmenu
              ? `w-full flex flex-col items-center mobile-links`
              : `hidden`
          }
        >
          <li className="m-2" onClick={() => scrollSectionIntoView("hero")}>Home</li>
          <li className="m-2" onClick={() => scrollSectionIntoView("about")}>About</li>
          <li className="m-2" onClick={() => scrollSectionIntoView("services")}>Service</li>
          <li className="m-2" onClick={() => scrollSectionIntoView("projects")}>Projects</li>
          <li className="m-2" onClick={() => scrollSectionIntoView("contact")}>Contact us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
