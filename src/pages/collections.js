import { useState } from "react"
import { Tag } from "../components/Collections/tag"
import { CollectionCard } from "../components/Collections/collectionCard"

import image1 from "./src/Rectangle 14 (1).png"
import image2  from "./src/Rectangle 14.png"
import image3 from "./src/Rectangle 14 (2).png"
import image4 from "./src/Rectangle 14 (3).png"
import image5 from "./src/Rectangle 14 (4).png"

export const Collections = () => {
  const [active, setActive]  = useState(1)

  const tags = [
    {
      id: 1,
      title: 'My collection'
    },
    {
      id: 2,
      title: 'Likes'
    },
    {
      id: 3,
      title: 'Favourites'
    }
  ]

  const collections = [
    {
      id:  1,
      name: 'Life in a bubble',
      artist: 'The van',
      duration: '24k Likes',
      image: image2
    },
    {
      id:  2,
      name: 'Mountain',
      artist: 'The van',
      duration: '24k Likes',
      image: image1
    },
    {
      id:  3,
      name: 'Limits',
      artist: 'The van',
      duration: '24k Likes',
      image: image3
    },
    {
      id:  4,
      name: "Everything's black",
      artist: 'The van',
      duration: '24k Likes',
      image: image4
    },
    {
      id:  5,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
    {
      id:  6,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
    {
      id:  6,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
    {
      id:  6,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
    {
      id:  6,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
    {
      id:  6,
      name: 'Cancelled',
      artist: 'The van',
      duration: '24k Likes',
      image: image5
    },
  ]

  const displayTags = (tags) => {
    return tags.map((tag) => {
      return (
        <div key={tag.id} onClick={(e) => {
          e.preventDefault()
          setActive(tag.id)
        }}>
          <Tag tag={tag} active={tag.id===active? true:false} />
        </div>
      );
    });
  };

  const displayCollections = (collections) => {
    return collections.map((collection) => {
      return (
        <CollectionCard key={collection.id} collection={collection} />
      );
    });
  };

  return (
	<section className="flex flex-col h-max min-h-[100vh] gap-8 sm:h-full ml-0 pt-24 m-auto sm:pl-32 2xl:pt-40 2xl:pl-44 pb-24">
    <div className="w-screen sm:w-max flex gap-4 justify-center">
      {displayTags(tags)}
    </div>

    <div className="flex flex-wrap gap-8 h-full m-auto sm:m-0 w-11/12  overflow-scroll">
      {displayCollections(collections)}
    </div>

  </section>
  )
}
