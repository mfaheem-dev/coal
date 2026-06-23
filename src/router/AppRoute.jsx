import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

// 🔐 Login
import LoginPage from "../component/Login";
import ProtectedRoute from "../component/ProtectedRoute";
import EdRegister from "../component/EdRegister";
// 🧑‍💼 Monshi Pages
import ClerkHome from "../page/Clerk/Home";
import ClerkEmployees from "../page/Clerk/employees";
import ClerkDrivers from "../page/Clerk/drivers";
import ClerkExpenditures from "../page/Clerk/Expenditures";
import MeelEmployees from "../page/Clerk/MeelEmployess";
import StackEmployees from "../page/Clerk/StackEmployess";
import MeelDrivers from "../page/Clerk/MeelDrivers";
import StackDrivers from "../page/Clerk/StackDrivers";
// 👨‍💼 Manager Pages
import ManagerHome from "../page/manger/Home";
import ManagerEmployees from "../page/manger/employees";
import ManagerDrivers from "../page/manger/drivers";
import ManagerExpenditures from "../page/manger/Expenditures";

// 🚧 Contractor Pages
import ContractorHome from "../page/Contractor/Home";
import ContractorEmployees from "../page/Contractor/employees";
import ContractorDrivers from "../page/Contractor/drivers";
import ContractorProducts from "../page/Contractor/Products";
import StacklDrivers from "../page/Clerk/StackDrivers";

const router = createBrowserRouter([
  // 🔐 Login
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <EdRegister />,
  },
  // 🧑 Monshi Dashboard
  {
    path: "/clerk",
    element: (
      <ProtectedRoute allowedRole="Clerk">
        <DashboardLayout role="clerk" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ClerkHome /> },

      {
        path: "employees",
        element: <ClerkEmployees />,
        children: [
          { index: true, element: <MeelEmployees /> },
          { path: "stack", element: <StackEmployees /> },
        ],
      },
      {
        path: "drivers",
        element: <ClerkDrivers />,

        children: [
          { index: true, element: <MeelDrivers /> },
          { path: "stack", element: <StacklDrivers /> },
        ],
      },

      { path: "expenditures", element: <ClerkExpenditures /> },
    ],
  },

  // 👨 Manager Dashboard
  {
    path: "/manager",
    element: (
      <ProtectedRoute allowedRole="Manager">
        <DashboardLayout role="manager" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ManagerHome /> },
      { path: "employees", element: <ManagerEmployees /> },
      { path: "drivers", element: <ManagerDrivers /> },
      { path: "expenditures", element: <ManagerExpenditures /> },
    ],
  },

  // 🚧 Contractor Dashboard
  {
    path: "/contractor",
    element: (
      <ProtectedRoute allowedRole="Contractor">
        <DashboardLayout role="contractor" />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ContractorHome /> },
      { path: "employees", element: <ContractorEmployees /> },
      { path: "drivers", element: <ContractorDrivers /> },
      { path: "products", element: <ContractorProducts /> },
    ],
  },
]);

export default router;
