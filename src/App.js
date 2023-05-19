import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import { useEffect, useState } from "react";
import { Bars } from  'react-loader-spinner'
import { getAuth } from "firebase/auth";
import { login, logout } from "./redux/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "./pages/auth";
import { firebaseApp } from "./utils/firebase";

const Loader = () => {
  return <section className="grid place-items-center h-screen bg-primary">
    <Bars
      height="80"
      width="80"
      color="#609EAF"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </section>
}

function App() {
  const authState = useSelector(state => state.authentication)
  const [loading,setLoading] = useState(true)
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
      setLoading(false)
    })
  }, [])


  if (loading) {
    return <Loader/>
  }

  if (!authState.isLogged) {
    return <Auth/>
  }

  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
