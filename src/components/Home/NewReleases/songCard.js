export const SongCard = ({song}) => {
  return (
	<div className="flex flex-col gap-1">
		<img src={song.image} className="mb-2 w-40 h-40 2xl:w-50 2xl:h-50 3xl:w-60 3xl:h-60 4xl:w-72 4xl:h-72" alt="song"/>
		<h2 className="font-light text-sm 2xl:text-xl 4xl:text-3xl">{song.name}</h2>
		<p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50">{song.artist}</p>
	</div>
  )
}
