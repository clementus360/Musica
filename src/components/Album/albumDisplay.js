import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { putCollection } from '../../redux/collectionSlice'
import { addAlbum } from '../../redux/playlistSlice'
import { setCurretSong } from '../../redux/currentSlice'
import { likeAlbum } from '../../redux/albumSlice'

import { AddMusicIcon } from './src/addMusicIcon'
import { PlayIcon } from './src/playIcon'
import { RedHeartIcon } from './src/RedHeartIcon'
import { putlikes } from '../../redux/likeSlice'
import { HeartOutlineIcon } from '../Home/Dashboard/src/heartOutlineIcon'

export const AlbumDisplay = ({album}) => {
	const  [liked, setLiked] = useState(album.liked)
	const collection = useSelector(state => state.collection)
	const playlist = useSelector(state => state.playlist)
	const dispatch = useDispatch()

	const addCollection = () => {
		if (collection.indexOf(album)==-1)
			dispatch(putCollection(album))
	}

	const playAlbum = () => {
		const last = playlist.length
		dispatch(addAlbum(album))
		dispatch(setCurretSong(last))
	}

	const like = () => {
		dispatch(likeAlbum(album))
		dispatch(putlikes(album))
		setLiked(true)
	}

	const heart = () => {
		return liked? <RedHeartIcon />:<HeartOutlineIcon />
	}

  return (
	<div className='flex flex-col sm:flex-row gap-8 items-center sm:items-end'>
		<img src={album.image} className="h-72 w-auto 2xl:h-80 3xl:h-96" alt="album" />
		<div className='flex flex-col gap-12 items-center sm:items-start'>
			<div className='flex flex-col gap-2 w-10/12 sm:w-4/6'>
				<h1 className='font-semibold text-accent text-4xl 2xl:text-6xl'>
					{album.name}
				</h1>
				<p className='font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80'>
					{album.description}
				</p>
				<p className='font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80'>
					{album.songNumber} songs ~ {album.totalLength} hrs+
				</p>
			</div>
			<div className='flex gap-2 sm:gap-4 w-10/12 sm:w-max'>
				<button onClick={playAlbum} className="cursor-pointer flex items-center gap-2 sm:gap-4 p-2 sm:p-2 pl-2 pr-2 sm:pl-4 sm:pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey hover:bg-darkGrey w-max rounded-4xl bg-opacity-50 backdrop-blur-lg transition-all">
					<PlayIcon />
					<p>Play all</p>
				</button>

				<button onClick={addCollection} className="cursor-pointer flex items-center gap-2 sm:gap-4 p-2 sm:p-2 pl-2 pr-2 sm:pl-4 sm:pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey hover:bg-darkGrey w-max rounded-4xl bg-opacity-50 backdrop-blur-lg transition-all">
					<AddMusicIcon />
					<p>Add to collection</p>
				</button>

				<button disabled={liked} onClick={like} className="cursor-pointer flex items-center gap-2 sm:gap-4 p-3 sm:p-3 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey hover:bg-darkGrey w-max rounded-full bg-opacity-50 backdrop-blur-lg transition-all">
					{heart()}
				</button>
			</div>
		</div>
	</div>
  )
}
