import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch} from 'react-redux'
import { likeAlbum } from '../../../redux/albumSlice'
import { putlikes } from '../../../redux/likeSlice'

import { HeartOutlineIcon } from './src/heartOutlineIcon'
import { HeartFilledIcon } from './src/heartFilledIcon copy'

export const ChartCard = ({details}) => {
	const  [liked, setLiked] = useState(details.liked)
	const dispatch = useDispatch()


	const like = () => {
		dispatch(likeAlbum(details))
		dispatch(putlikes(details))
		setLiked(true)
	}

	const likeButton = () => {
		return liked? <HeartFilledIcon />:<HeartOutlineIcon />
	}

  return (
	<div className="grid grid-rows-2 grid-cols-2 sm:grid-rows-1 sm:grid-cols-[1fr_2fr_1fr] gap-4 sm:gap-2 2xl:gap-6 content-between sm:items-center bg-darkGrey p-4 pl-6 pr-8 4xl:p-8 4xl:pl-12 4xl:pr-16 rounded-3xl w-max sm:w-full">

		<div className='w-max col-start-1 sm:col-auto'>
			<Link to={`/album/${details.id}`}>
				<img src={details.image} alt="song" className="h-24 w-24 sm:h-20 sm:w-20 2xl:h-32 2xl:w-32 4xl:h-36 4xl:w-36" />
			</Link>
		</div>

		<div className='flex flex-col h-full sm:justify-between col-start-1 sm:col-auto'>
			<Link to={`/album/${details.id}`}>
			<h1 className='font-medium text-lg 2xl:text-2xl 4xl:text-4xl'>{details.name}</h1>
			</Link>
			<p className='font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50'>{details.artist}</p>
			<p className='text-sm 2xl:text-xl 4xl:text-3xl mt-4 sm:mt-0'>{details.totalLength} hours</p>
		</div>
		<div className='justify-self-end col-start-2 row-start-1 sm:ml-16 2xl:ml-20 4xl:ml-24 sm:col-auto sm:row-auto'>
			<div onClick={liked? null:like} className='border-[1px] hover:scale-110 border-lightGrey w-max p-2 rounded-full cursor-pointer' >
				{likeButton()}
			</div>
		</div>
	</div>
  )
}
