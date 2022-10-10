import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
// import { Player } from "../components/Player"
import { Sidebar } from "../components/Sidebar"

export const Layout = () => {
  return (
	<>
		<Sidebar />
		<Header />
		{/* <Player /> */}
		<Outlet />
	</>
  )
}
