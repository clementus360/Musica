import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { HeartOutlineIcon } from "./src/heartOutlineIcon"
import { RedHeartIcon } from "./src/RedHeartIcon"
import { MoreIcon } from "./src/moreIcon"

import { addSong } from "../../redux/playlistSlice"
import { setCurretSong } from "../../redux/currentSlice"
import { likeSong } from "../../redux/albumSlice"
import { putlikes } from "../../redux/likeSlice"

import { SongMenu } from "./songMenu"

export const SongBar = ({song}) => {
  const  [liked, setLiked] = useState(song.liked)
  const [isMenu, setIsMenu] = useState(false)
	const playlist = useSelector(state => state.playlist)
  const dispatch = useDispatch()

  const handleClick = () => {
		dispatch(addSong(song))
		dispatch(setCurretSong(playlist.length))
	}

  const like = () => {
    dispatch(likeSong(song))
    dispatch(putlikes(song))
    setLiked(true)
  }

  const heart = () => {
    return liked? <RedHeartIcon />:<HeartOutlineIcon />
  }

  const toggleMenu = () => {
    setIsMenu(menu => menu? false:true)
  }

  return (
    <div  className="relative grid grid-cols-[1fr_3fr_1fr] grid-rows-2 sm:grid-rows-1 gap-x-4 sm:gap-0 sm:grid-cols-[1fr_5fr_5fr_5fr_5fr_1fr] items-center bg-darkGrey bg-opacity-70 backdrop-blur-sm p-2 rounded-xl w-full sm:w-11/12 ">
      <SongMenu song={song} isMenu={isMenu} toggleMenu={toggleMenu}/>
      <img src={song.image} className=" row-span-2 sm:w-12 sm:h-12" alt="song" />
      <div onClick={liked? null:like} className="hidden sm:block">
        {heart()}
      </div>
      <p  className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80 cursor-pointer" onClick={handleClick}>{song.name} - {song.artist}</p>
      <p className="font-light justify-self-start col-start-2 sm:col-auto text-sm 2xl:text-xl 4xl:text-3xl opacity-80 sm:justify-self-center">{song.feature===''? 'Single': song.feature}</p>
      <p className="font-light justify-self-end sm:justify-self-auto col-start-3 row-start-1 sm:col-auto sm:row-auto text-sm 2xl:text-xl 4xl:text-3xl opacity-80">{song.duration}</p>
      <div onClick={toggleMenu} className="justify-self-end sm:justify-self-auto">
        <MoreIcon />
      </div>
    </div>
  )
}
