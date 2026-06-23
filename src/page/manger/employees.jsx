import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Employees = () => {
  const [activeTab, setActiveTab] = useState("meelEmployees");
  return (
    <>
      <ul className="nav nav-pills ms-4 mt-4">
        <li className="nav-item">
          <Link
            to="/Clerk/employees"
            className={`nav-link ${activeTab === "meelEmployees" ? "active" : ""}`}
            onClick={() => setActiveTab("meelEmployees")}
          >
            meel Employees
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Stack"
            className={`nav-link ${activeTab === "stackEmployees" ? "active" : ""}`}
            onClick={() => setActiveTab("stackEmployees")}
          >
            stack Employees
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default Employees;
