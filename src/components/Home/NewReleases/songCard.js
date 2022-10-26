import { useDispatch,useSelector } from "react-redux"
import { setCurretSong } from "../../../redux/currentSlice"
import { addSong } from "../../../redux/playlistSlice"

export const SongCard = ({song}) => {
	const dispatch = useDispatch()
	const playlist = useSelector(state => state.playlist)
	const handleClick = () => {
		dispatch(addSong(song))
		dispatch(setCurretSong(playlist.length))
	}
  return (
	<div className="flex flex-col gap-1">
		<img src={song.image} className="mb-2 w-40 h-40 2xl:w-50 2xl:h-50 3xl:w-60 3xl:h-60 4xl:w-72 4xl:h-72 cursor-pointer" onClick={handleClick} alt="song"/>
		<h2 className="font-light text-sm 2xl:text-xl 4xl:text-3xl cursor-pointer" onClick={handleClick}>{song.name}</h2>
		<p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50">{song.artist}</p>
	</div>
  )
}
