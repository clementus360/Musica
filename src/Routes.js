import { useSelector, useDispatch } from "react-redux";
import { useRoutes, Navigate } from "react-router-dom";
import { Layout } from "./layouts";
import { Album } from "./pages/album";
import { Collections } from "./pages/collections";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { useEffect } from "react";
import { login, logout } from "./redux/authenticationSlice";
import { getAuth } from "@firebase/auth";
import Profile from "./pages/profile";
import { firebaseApp } from "./utils/firebase";
import 'react-tooltip/dist/react-tooltip.css'

const Routes = () => {
  const authState = useSelector(state => state.authentication)
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()

    auth.onAuthStateChanged((user) => {
      if (user) {
        const userObject = {
          username: user.displayName,
          email: user.email,
          id: user.uid,
          image: user.photoURL,
        }
        dispatch(login(userObject))
      } else {
        dispatch(logout())
      }
    })

  }, [])

  return useRoutes([
    {
      element: authState.isLogged?  <Layout />:<Auth/>,
      children: [
        { path: "", element: authState.isLogged? <Home />:<Auth /> },
        { path: "collections", element: <Collections /> },
        { path: "album/:albumId", element: <Album /> },
        { path: "profile", element: <Profile /> },
      ],
    },

    { path: "*", element: <Navigate to="/" /> },
  ]);
};

export default Routes;
