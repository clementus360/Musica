import { Logo } from "./src/logo"
import { MenuIcon } from "./src/menuIcon"
import { SearchIcon } from "./src/searchIcon"

export const Header = () => {
  return (
	<section className="fixed flex gap-56 sm:gap-4 w-full justify-around sm:justify-start top-0 sm:ml-32 mt-7 2xl:ml-44 2xl:mt-9 items-center">
		<div className="flex gap-4 sm:hidden">
			<MenuIcon />
			<Logo />
		</div>
		<SearchIcon/>
		<input type="search" name="q" placeholder="Search artists" id="site-search" className="hidden sm:block bg-primary text-lightGrey font-light text-sm 2xl:text-xl 4xl:text-3xl"/>
	</section>
  )
}
