import ReactDOM from "react-dom/client";
import router from "./router/AppRoute";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
