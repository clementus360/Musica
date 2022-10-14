import { AddMusicIcon } from './src/addMusicIcon'
import { PlayIcon } from './src/playIcon'
import { RedHeartIcon } from './src/RedHeartIcon'

export const AlbumDisplay = ({album}) => {
  return (
	<div className='flex gap-8 items-end'>
		<img src={album.image} className="h-72 w-auto 2xl:h-80 3xl:h-96" alt="album" />
		<div className='flex flex-col gap-12'>
			<div className='flex flex-col gap-2 w-4/6'>
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
			<div className='flex gap-4'>
				<button className="cursor-pointer flex items-center gap-4 p-2 pl-4 pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey w-max rounded-4xl bg-opacity-50 backdrop-blur-lg">
					<PlayIcon />
					<p>Play all</p>
				</button>

				<button className="cursor-pointer flex items-center gap-4 p-2 pl-4 pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey w-max rounded-4xl bg-opacity-50 backdrop-blur-lg">
					<AddMusicIcon />
					<p>Add to collection</p>
				</button>

				<button className="cursor-pointer flex items-center gap-4 p-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey w-max rounded-full bg-opacity-50 backdrop-blur-lg">
					<RedHeartIcon />
				</button>
			</div>
		</div>
	</div>
  )
}
