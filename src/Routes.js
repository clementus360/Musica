import { useRoutes, Navigate } from "react-router-dom";
import { Layout } from "./layouts";
import { Album } from "./pages/album";
import { Collections } from "./pages/collections";
import { Home } from "./pages/home";

const Routes = () => {
  return useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "collections", element: <Collections /> },
        { path: "album/:albumId", element: <Album /> },
      ],
    },

    { path: "*", element: <Navigate to="/" /> },
  ]);
};

export default Routes;
