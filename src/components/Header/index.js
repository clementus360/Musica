import { useState } from "react"
import { Link } from "react-router-dom";

import { Menu } from "./menu"

import { Logo } from "./src/logo"
import { MenuIcon } from "./src/menuIcon"
import { SearchIcon } from "./src/searchIcon"
import { useSelector } from "react-redux";

export const Header = () => {
	const [isMenu, setIsMenu] = useState(false)
	const auth = useSelector(state => state.authentication)

	const toggleMenu = () => {
		setIsMenu(menu => menu? false:true)
	}

  return (
	<section className="fixed flex gap-56 bg-primary sm:gap-4 w-full justify-around sm:justify-between top-0 sm:pl-32 sm:pr-24 pt-7 pb-6 2xl:pl-44 2xl:pt-9 items-center z-30">
		<div className="flex">
		<Menu visible={isMenu} toggleMenu={toggleMenu}/>
		<div className="flex gap-4 sm:hidden">
			<div onClick={toggleMenu}>
				<MenuIcon />
			</div>
			<Link to="/"><Logo /></Link>
		</div>
		<div className="flex gap-4">
			<SearchIcon/>
			<input type="search" name="search" placeholder="Search artists" id="site-search" className="hidden w-64 sm:block bg-primary text-lightGrey pl-4 outline-none focus:border-b-2 active:border-b-2 border-b-1 transition-all font-light text-sm 2xl:text-xl 4xl:text-3xl"/>
		</div>
		</div>
	</section>
  )
}
