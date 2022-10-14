import { PlayIcon } from "./src/playIcon"

export const CollectionCard = ({collection}) => {

  return (
	<div className="group cursor-pointer flex items-end h-72 w-full sm:h-[15rem] sm:w-[14.5rem] 2xl:h-[20rem] 2xl:w-[19.5rem] 3xl:h-[24rem] 3xl:w-[23.4rem] rounded-3xl p-4 pb-2 overflow-hidden"
		style={{
			backgroundImage: `linear-gradient(to top, rgba(20, 20, 20, 1) 0%, rgba(0, 0, 0, 0) 100%), url("${collection.image}")`,
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '150%',
		}}
	>
		<div className="relative w-full -bottom-16 group-hover:bottom-0 transition-all">
			<h2 className="text-2xl 2xl:text-4xl 4xl:text-6xl">{collection.name}</h2>
			<p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50">{collection.artist}</p>
			<div className="flex w-full justify-between items-center">
				<p>{collection.duration}</p>
				<PlayIcon />
			</div>
		</div>
	</div>
  )
}
