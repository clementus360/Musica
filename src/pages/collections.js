import { useState } from "react"
import { useSelector } from "react-redux"

import { Tag } from "../components/Collections/tag"
import { CollectionCard } from "../components/Collections/collectionCard"

export const Collections = () => {
  const [active, setActive]  = useState(1)
  const collection = useSelector(state => state.collection)
  const likes = useSelector(state => state.likeCollection)

  const tags = [
    {
      id: 1,
      title: 'My collection'
    },
    {
      id: 2,
      title: 'Likes'
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
        <CollectionCard key={collection.id} album={collection} />
      );
    });
  };

  const displayLikes  = (likes) => {
    return likes.map((like) => {
      return (
        <CollectionCard key={like.id} album={like} />
      );
    });
  }

  return (
	<section className="flex flex-col h-max min-h-[100vh] gap-8 sm:h-full ml-0 pt-24 m-auto sm:pl-32 2xl:pt-40 2xl:pl-44 pb-32">
    <div className="w-screen sm:w-max flex gap-4 justify-center">
      {displayTags(tags)}
    </div>

    {active===1 &&
      <div className="flex flex-wrap gap-8 h-full m-auto sm:m-0 w-11/12  overflow-scroll">
        {collection && displayCollections(collection)}
      </div>
    }
    {active===2 &&
      <div className="flex flex-wrap gap-8 h-full m-auto sm:m-0 w-11/12  overflow-scroll">
        {likes && displayLikes(likes)}
      </div>
    }

  </section>
  )
}
