import style from "./DashboardLayout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

import { Outlet } from "react-router-dom";
const DashboardLayout = ({ role }) => {
  return (
    <>
      <div className={`${style.appContent}`}>
        <Sidebar role={role} />
        <div className={`${style.headerFoter}`}>
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
