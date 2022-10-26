import { Link, useLocation } from "react-router-dom";

import { HomeIcon } from "./src/homeIcon";
import { LogoutIcon } from "./src/logoutIcon"
import { PlaylistIcon } from "./src/playlistIcon";
import { ProfileIcon } from "./src/profileIcon";
import { RadioIcon } from "./src/radioIcon";
import { VideosIcon } from "./src/videosIcon";

export const Menu = ({visible, toggleMenu}) => {
  return (
	<div className='fixed w-8/12 h-screen sm:hidden left-0 top-0 z-40 flex flex-col bg-primary pl-8 gap-8 text-lightGrey transition-all'
		style={{
			opacity: visible? '1': '0',
			width: visible? '60%': '0%',
			visibility: visible? 'visible':'hidden'
		}}
	>
		<div className="justify-self-end self-end" onClick={toggleMenu}>X</div>
	  	<Link className="flex gap-4 items-center" to='/' onClick={toggleMenu}><HomeIcon active={useLocation().pathname === "/"? true:false}/> Home</Link>
		<Link  className="flex gap-4 items-center" to='/collections' onClick={toggleMenu}><PlaylistIcon  active={useLocation().pathname === "/collections"? true:false}/>My collections</Link>
		<Link  className="flex gap-4 items-center" to='/' onClick={toggleMenu}><RadioIcon active={useLocation().pathname === "/radio"? true:false}/> Radio</Link>
		<Link  className="flex gap-4 items-center" to='/' onClick={toggleMenu}><VideosIcon active={useLocation().pathname === "/videos"? true:false}/> Music videos</Link>
		<Link  className="flex gap-4 items-center" to='/' onClick={toggleMenu}><ProfileIcon/> Profile</Link>
		<Link  className="flex gap-4 items-center" to='/' onClick={toggleMenu}><LogoutIcon/> Log out</Link>
	</div>
  )
}
