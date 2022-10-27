import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { addAlbum } from "../../redux/playlistSlice"
import { addSong } from "../../redux/playlistSlice"
import { setCurretSong } from "../../redux/currentSlice"


import { PlayIcon } from "./src/playIcon"

export const CollectionCard = ({album}) => {
	const playlist = useSelector(state => state.playlist)
	const dispatch = useDispatch()

	const playAlbum = () => {
		const last = playlist.length
		if (album.songs) {
			dispatch(addAlbum(album))
		} else {
			dispatch(addSong(album))
		}
		dispatch(setCurretSong(last))
	}

  return (
	<div className="group cursor-pointer flex items-end h-72 w-full sm:h-[15rem] sm:w-[14.5rem] 2xl:h-[20rem] 2xl:w-[19.5rem] 3xl:h-[24rem] 3xl:w-[23.4rem] rounded-3xl p-4 pb-2 overflow-hidden"
		style={{
			backgroundImage: `linear-gradient(to top, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 0) 100%), url("${album.image}")`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '150%',
		}}
	>
		<div className="relative w-full -bottom-10 group-hover:bottom-0 transition-all">
			<h2 className="text-2xl 2xl:text-4xl 4xl:text-6xl"><Link to={`/album/${album.id}`}>{album.name}</Link></h2>
			<p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50">{album.artist}</p>
			<div className="flex w-full mt-2 justify-between items-center">
				<p>{album.likes} likes</p>
				<div onClick={playAlbum}>
					<PlayIcon />
				</div>
			</div>
		</div>
	</div>
  )
}
