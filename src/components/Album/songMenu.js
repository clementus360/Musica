import { useDispatch, useSelector } from "react-redux"

import { PlayIcon } from "./src/playIcon"
import { AddMusicIcon } from "./src/addMusicIcon"

import { addSong } from "../../redux/playlistSlice"
import { setCurretSong } from "../../redux/currentSlice"
import { putCollection } from "../../redux/collectionSlice"

export const SongMenu = ({isMenu, song, toggleMenu}) => {
  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection)
  const playlist = useSelector(state => state.playlist)

  const handleClick = () => {
		dispatch(addSong(song))
		dispatch(setCurretSong(playlist.length))
    toggleMenu()
	}

  const addCollection = () => {
		if (collection.indexOf(song)===-1)
			dispatch(putCollection(song))
      toggleMenu()
	}

  return (
	  <div style={{display: `${isMenu? 'flex':'none'}`}} className="absolute z-50 -right-0 -top-16 sm:-right-28 sm:-top-20 flex-col gap-4 bg-primary shadow-lg p-4">
      <div onClick={handleClick} className="flex gap-4 items-center border-b-darkGrey cursor-pointer">
        <PlayIcon />
        <p>Play</p>
      </div>
      <div onClick={addCollection} className="flex gap-4 items-center cursor-pointer">
        <AddMusicIcon />
        <p>Add to collection</p>
      </div>
    </div>
  )
}
