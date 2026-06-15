import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Employees from "../page/monshi/employees";
import Drivers from "../page/monshi/drivers";
import Home from "../page/monshi/Home";
import Products from "../page/monshi/Products";
import MeelEmployees from "../page/monshi/MeelEmployess";
import StackEmployees from "../page/monshi/StackEmployess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout role="monshi" />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/Employees",
        element: <Employees />,
        children: [
          {
            path: "/Employees",
            element: <MeelEmployees />,
          },
          {
            path: "Stack",
            element: <StackEmployees />,
          },
        ],
      },
      {
        path: "/drivers",
        element: <Drivers />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
    ],
  },
]);
export default router;
