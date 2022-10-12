import { SongCard } from "./songCard"

import image1 from "./src/Rectangle 14 (1).png"
import image2  from "./src/Rectangle 14.png"
import image3 from "./src/Rectangle 14 (2).png"
import image4 from "./src/Rectangle 14 (3).png"
import image5 from "./src/Rectangle 14 (4).png"

export const NewReleases = () => {
  const releases = [
    {
      id:  1,
      name: 'Life in a bubble',
      artist: 'The van',
      image: image2
    },
    {
      id:  2,
      name: 'Mountain',
      artist: 'The van',
      image: image1
    },
    {
      id:  3,
      name: 'Limits',
      artist: 'The van',
      image: image3
    },
    {
      id:  4,
      name: "Everything's black",
      artist: 'The van',
      image: image4
    },
    {
      id:  5,
      name: 'Cancelled',
      artist: 'The van',
      image: image5
    },
  ]

  const displaySongs = (songs) => {
    return songs.map((song) => {
      return (
        <SongCard song={song} />
      );
    });
  };

  return (
	<section  className="w-screen  overflow-hidden flex flex-col gap-4">
    <h1 className="font-bold text-2xl ml-4 sm:ml-0 2xl:text-3xl 4xl:text-4xl">New releases</h1>
    <div className="w-full ml-4 sm:ml-0 overflow-scroll">
      <div className="flex flex-row gap-8 w-max">
        {displaySongs(releases)}
      </div>
    </div>
  </section>
  )
}
