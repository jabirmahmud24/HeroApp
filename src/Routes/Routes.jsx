import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Instalation from "../Pages/Instalation";
import RootLayout from "../Layouts/RootLayout";
import Error404 from "../Pages/Error404";
import AppDeatils from "../Pages/AppDeatils";
import LoadingSpinner from "../Components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error404 />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("/apps_data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/instalation",
        element: <Instalation />,
      },
      {
        path: "/apps/:id",
        element: <AppDeatils />,
      },
    ],
  },
]);
export default router;
