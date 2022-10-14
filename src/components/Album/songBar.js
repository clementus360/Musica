export const SongBar = ({song}) => {
  return (
    <div  className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-center bg-lightGrey p-2 rounded-xl w-11/12 ">
      <img src={song.image} className="w-12 h-12" alt="song" />
      <p  className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80">{song.name} - {song.artist}</p>
      <p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80 justify-self-center">{song.feature===''? 'Single': song.feature}</p>
      <p className="font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-80">{song.duration}</p>
    </div>
  )
}
