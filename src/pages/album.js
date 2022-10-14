import { AlbumDisplay } from '../components/Album/albumDisplay'
import { SongBar } from '../components/Album/songBar'

import albumImage from './src/Lead-image.png'
import image1 from "./src/Rectangle 14 (1).png"
import image2  from "./src/Rectangle 14.png"
import image3 from "./src/Rectangle 14 (2).png"
import image4 from "./src/Rectangle 14 (3).png"

export const Album = () => {

  const album = {
    id: 1,
    name: "Tomorrow's tunes",
    image: albumImage,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    songNumber: 64,
    totalLength: 16,
    songs: [
      {
        id: 1,
        name: 'Let me love you',
        image: image1,
        artist: 'Krisx',
        feature: '',
        duration: '2:02'
      },
      {
        id: 2,
        name: 'Watin man go do',
        image: image2,
        artist: 'Burna',
        feature: 'African giant',
        duration: '4:42'
      },
      {
        id: 3,
        name: 'Let me love you',
        image: image3,
        artist: 'Krisx',
        feature: '',
        duration: '2:30'
      },
      {
        id: 4,
        name: 'Closer',
        image: image4,
        artist: 'Ybee',
        feature: 'Obi datti',
        duration: '3:23'
      }
    ]
  }

  const displaySongs = (songs) => {
    return songs.map((song) => {
      return (
        <SongBar key={song.id} song={song}/>
      );
    });
  };
  return (
    <section className='flex flex-col h-max min-h-[90vh] gap-8 sm:h-screen ml-0 pt-24 m-a uto sm:pl-32 2xl:pt-40 2xl:pl-44 bg-cover'
      style={{
        backgroundImage: `linear-gradient(to top, #1A1E1F 20%, rgba(0, 0, 0, 0) 400%), url(${albumImage})`,
      }}
    >
      <AlbumDisplay album={album} />
      <div className='flex flex-col gap-4'>
        {displaySongs(album.songs)}
      </div>
    </section>
  )
}
