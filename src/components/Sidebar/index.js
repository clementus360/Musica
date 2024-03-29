import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { HomeIcon } from "./src/homeIcon";
import { Logo } from "./src/logo";
import { LogoutIcon } from "./src/logoutIcon"
import { PlaylistIcon } from "./src/playlistIcon";
import { ProfileIcon } from "./src/profileIcon";
import { RadioIcon } from "./src/radioIcon";
import { VideosIcon } from "./src/videosIcon";
import { logout } from "../../redux/authenticationSlice";
import { getAuth } from "@firebase/auth";

export const Sidebar = () => {
	const dispatch = useDispatch()

	const logOutHelper = () => {
		const auth = getAuth()
		auth.signOut().then(() => {
			dispatch(logout)
		})
	}

  return (
    <section className="z-40 fixed hidden sm:flex top-0 flex-col gap-10 2xl:gap-12 3xl:gap-14 items-center w-max p-6">
      <div>
	  <Link to='/'><Logo /></Link>
	  </div>
	  <div className="flex flex-col gap-8 2xl:gap-10 3xl:gap-14 items-center w-max bg-darkGrey rounded-full p-2 pb-6 pt-6">
	  	<Link to='/'><HomeIcon active={useLocation().pathname === "/"? true:false}/></Link>
		<Link to='/collections'><PlaylistIcon  active={useLocation().pathname === "/collections"? true:false}/></Link>
		<RadioIcon active={useLocation().pathname === "/radio"? true:false}/>
		<VideosIcon active={useLocation().pathname === "/videos"? true:false}/>
	  </div>
	  <div className="flex flex-col gap-10 2xl:gap-10 3xl:gap-14 items-center w-max bg-darkGrey rounded-full p-2 pt-6 pb-6" >
	  	<Link to='/profile'><ProfileIcon/></Link>
		<Link to='/' onClick={() => logOutHelper()}><LogoutIcon/></Link>
	  </div>
    </section>
  );
};
