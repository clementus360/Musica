import { useRoutes, Navigate } from "react-router-dom";
import { Layout } from "./layouts";
import { Album } from "./pages/album";
import { Collections } from "./pages/collections";
import { Home } from "./pages/home";

import Profile from "./pages/profile";

import 'react-tooltip/dist/react-tooltip.css'

const Routes = () => {

  return useRoutes([
    {
      element: <Layout />,
      children: [
        { path: "", element:  <Home /> },
        { path: "collections", element: <Collections /> },
        { path: "album/:albumId", element: <Album /> },
        { path: "profile", element: <Profile /> },
      ],
    },

    { path: "*", element: <Navigate to="/" /> },
  ]);
};

export default Routes;
