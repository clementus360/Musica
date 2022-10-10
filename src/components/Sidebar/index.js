import { Link, useLocation } from "react-router-dom";

import { HomeIcon } from "./src/homeIcon";
import { Logo } from "./src/logo";
import { LogoutIcon } from "./src/logoutIcon"
import { PlaylistIcon } from "./src/playlistIcon";
import { ProfileIcon } from "./src/profileIcon";
import { RadioIcon } from "./src/radioIcon";
import { VideosIcon } from "./src/videosIcon";

const size = {
	width: 25,
	height: 25
}

export const Sidebar = () => {
  return (
    <section className="fixed hidden sm:flex top-0 flex-col gap-10 2xl:gap-12 3xl:gap-14 items-center w-max p-6">
      <div>
		<Logo />
	  </div>
	  <div className="flex flex-col gap-8 2xl:gap-10 3xl:gap-14 items-center w-max bg-darkGrey rounded-full p-2 pb-7 pt-2">
	  	<Link to='/'><HomeIcon active={useLocation().pathname === "/"? true:false}/></Link>
		<Link to='/collections'><PlaylistIcon  active={useLocation().pathname === "/collections"? true:false}/></Link>
		<RadioIcon active={useLocation().pathname === "/radio"? true:false}/>
		<VideosIcon active={useLocation().pathname === "/videos"? true:false}/>
	  </div>
	  <div className="flex flex-col gap-10 2xl:gap-10 3xl:gap-14 items-center w-max bg-darkGrey rounded-full p-4 pb-6" >
		<ProfileIcon/>
		<LogoutIcon/>
	  </div>
    </section>
  );
};
