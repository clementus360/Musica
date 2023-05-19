import { useState } from "react"
import { useSelector } from "react-redux"

import { SongCard } from "./songCard"

export const NewReleases = () => {
  const albums = useSelector(state => state.albums)

  let sortedAlbums = [...albums]
  sortedAlbums.sort(function(a, b){return b.release - a.release})

  const [releases,setReleases] = useState(() => {
    let songs = []
    albums.map(album => {
      return album.songs.map(song => {
       return songs.push(song)
      })
    })
    return songs
  })



  const displaySongs = (songs) => {
    return songs.map((song) => {
      return (
        <SongCard key={song.id} song={song} />
      );
    });
  };

  return (
	<section  className="w-screen  overflow-hidden flex flex-col gap-4">
    <h1 className="font-bold text-2xl ml-4 sm:ml-0 2xl:text-3xl 4xl:text-4xl">New releases</h1>
    <div className="w-full ml-4 sm:ml-0 overflow-scroll">
      <div className="flex flex-row gap-8 w-max pr-8">
        {displaySongs(releases)}
      </div>
    </div>
  </section>
  )
}
