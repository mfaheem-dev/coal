import hederlog from "../assets/coal-mining-emblem-2ACCB9N.jpg";
import Styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const menus = {
  clerk: [
    { name: "Home", path: "/clerk" },
    { name: "Employees", path: "/clerk/employees" },
    { name: "Drivers", path: "/clerk/drivers" },
    { name: "Expenditures", path: "/clerk/expenditures" },
  ],

  manager: [
    { name: "Home", path: "/manager" },
    { name: "Employees", path: "/manager/employees" },
    { name: "Drivers", path: "/manager/drivers" },
    { name: "Products", path: "/manager/products" },
  ],

  contractor: [
    { name: "Home", path: "/contractor" },
    { name: "Employees", path: "/contractor/employees" },
    { name: "Drivers", path: "/contractor/drivers" },
    { name: "Expenditure", path: "/contractor/expenditure" },
  ],
};

const Sidebar = ({ role = "clerk" }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = menus[role] || [];

  // ✅ Active check (URL based - BEST PRACTICE)
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className={`${Styles.sidebarContainer} ${open ? Styles.mobileOpen : ""}`}
    >
      {/* LOGO + MENU BUTTON */}
      <div className={Styles.logoBox}>
        <img src={hederlog} alt="logo" />

        <button className={Styles.menuBtn} onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* MENU */}
      <ul className={Styles.sidebarText}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={isActive(item.path) ? Styles.active : ""}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
