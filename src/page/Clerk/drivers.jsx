import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Drivers = () => {
  const [activeTab, setActiveTab] = useState("meelDrivers");
  return (
    <>
      <ul className="nav nav-pills ms-4 mt-4">
        <li className="nav-item">
          <Link
            to="/clerk/drivers"
            className={`nav-link ${activeTab === "meelDrivers" ? "active" : ""}`}
            onClick={() => setActiveTab("meelDrivers")}
          >
            meel Drivers
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="stack"
            className={`nav-link ${activeTab === "stackDrivers" ? "active" : ""}`}
            onClick={() => setActiveTab("stackDrivers")}
          >
            stack Drivers
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Drivers;
