import { useState } from "react"

import { Menu } from "./menu"

import { Logo } from "./src/logo"
import { MenuIcon } from "./src/menuIcon"
import { SearchIcon } from "./src/searchIcon"

export const Header = () => {
	const [isMenu, setIsMenu] = useState(false)

	const toggleMenu = () => {
		setIsMenu(menu => menu? false:true)
	}

  return (
	<section className="fixed flex gap-56 bg-primary sm:gap-4 w-full justify-around sm:justify-start top-0 sm:pl-32 pt-7 pb-6 2xl:pl-44 2xl:pt-9 items-center z-30">
		<Menu visible={isMenu} toggleMenu={toggleMenu}/>
		<div className="flex gap-4 sm:hidden">
			<div onClick={toggleMenu}>
				<MenuIcon />
			</div>
			<Logo />
		</div>
		<SearchIcon/>
		<input type="search" name="q" placeholder="Search artists" id="site-search" className="hidden sm:block bg-primary text-lightGrey font-light text-sm 2xl:text-xl 4xl:text-3xl"/>
	</section>
  )
}
