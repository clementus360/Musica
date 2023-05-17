import {  useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AlbumDisplay } from '../components/Album/albumDisplay'
import { SongBar } from '../components/Album/songBar'

export const Album = () => {
  const albums = useSelector(state => state.albums)

  const { albumId } = useParams()

  const album = albums.find(album => album.id == albumId)

  const displaySongs = (songs) => {
    return songs.map((song) => {
      return (
        <SongBar key={song.id} song={song}/>
      );
    });
  };
  return (
    <section className='flex flex-col h-max min-h-max pb-32 sm:min-h-screen gap-8 sm:h-max ml-0 pt-24 m-a uto sm:pl-32 2xl:pt-40 2xl:pl-44 bg-cover'
      style={{
        backgroundImage: `linear-gradient(to top, #1A1E1F 20%, rgba(0, 0, 0, 0) 400%), url(${album.image})`,
      }}
    >
      <AlbumDisplay album={album} />
      <div className='flex flex-col gap-4 w-10/12 m-auto sm:w-full sm:m-0 sm:gap-4'>
        {displaySongs(album.songs)}
      </div>
    </section>
  )
}
