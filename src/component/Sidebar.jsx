import hederlog from "../assets/coal-mining-emblem-2ACCB9N.jpg";
import Styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <div
        className={`d-flex flex-column flex-shrink-0 p-3  ${Styles.sidebarContainer}`}
      >
        <a
          href="#"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
        >
          <span className={Styles.logo}>
            <img src={hederlog} alt="" />
            <h3>Coal</h3>
          </span>
        </a>

        <ul
          className={`nav nav-pills flex-column mb-auto ${Styles.sidebarText}`}
        >
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link  text-white ${activeTab === "Home" ? "active" : ""}`}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Employees"
              className={`nav-link text-white ${activeTab === "Employees" ? "active" : ""}`}
              onClick={() => setActiveTab("Employees")}
            >
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Drivers"
              className={`nav-link text-white ${activeTab === "Drivers" ? "active" : ""}`}
              onClick={() => setActiveTab("Drivers")}
            >
              Drivers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Products"
              className={`nav-link text-white ${activeTab === "Products" ? "active" : ""}`}
              onClick={() => setActiveTab("Products")}
            >
              Products
            </Link>
          </li>
        </ul>
      </div>
      {/* offcanva code starte */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="offcanvasExampleLabel"
        style={{ "--bs-offcanvas-width": "250px" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className={`offcanvas-body ${Styles.sidebaroffcanva}`}>
          <ul
            className={`nav nav-pills flex-column mb-auto ${Styles.Uioffcanva}`}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link text-white ${activeTab === "Home" ? "active" : ""}`}
                onClick={() => setActiveTab("Home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Employees"
                className={`nav-link text-white ${activeTab === "Employees" ? "active" : ""}`}
                onClick={() => setActiveTab("Employees")}
              >
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Drivers"
                className={`nav-link text-white ${activeTab === "Drivers" ? "active" : ""}`}
                onClick={() => setActiveTab("Drivers")}
              >
                Drivers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Products"
                className={`nav-link text-white ${activeTab === "Products" ? "active" : ""}`}
                onClick={() => setActiveTab("Products")}
              >
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
