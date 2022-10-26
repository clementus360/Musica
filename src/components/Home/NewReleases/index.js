import { useState } from "react"
import { useSelector } from "react-redux"

import { SongCard } from "./songCard"

export const NewReleases = () => {
  const albums = useSelector(state => state.albums)
  const [releases,setReleases] = useState(() => {
    let songs = []
    albums.map(album => {
      album.songs.map(song => {
        songs.push(song)
      })
    })
    return songs
  })



  const popular = releases.sort(function(a, b){return b.likes - a.likes})

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
        {displaySongs(popular)}
      </div>
    </div>
  </section>
  )
}
