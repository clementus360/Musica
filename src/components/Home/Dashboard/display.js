import { HelixIcon } from "./src/helixIcon";
import image from "./src/Pexels Photo by Eric Esma.png";
import { HeartIcon } from "./src/heartIcon";

export const Display = (props) => {
	const playlist = props.playlist
  const displayLikes = (profiles) => {
    return profiles.map((profile) => {
      return (
        <img
          className="w-10 h-10 rounded-full"
          src={profile.src}
          key={profile.id}
          alt="profile"
        />
      );
    });
  };

  return (
    <div className="bg-bluish w-11/12 m-auto sm:m-0 h-[60vh] sm:w-6/12 sm:h-[25rem] 2xl:h-[35rem] 4xl:h-[45rem] rounded-3xl sm:rounded-4xl overflow-hidden sm:grid grid-cols-2 p-8 sm:p-0">
      <div className="flex flex-col justify-center gap-8 sm:gap-16 xl:gap-20 2xl:gap-32 sm:ml-16">

        <p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">
          Current playlist
        </p>

        <div className="flex flex-col gap-2 mt-40 xs:mt-[50vw] sm:mt-0">
          <h1 className="font-bold text-3xl xs:text-4xl 2xl:text-6xl">
            {playlist.name}
          </h1>
          <p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">
            {playlist.description}
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="flex">{displayLikes(playlist.likesTemplate)}</div>
          <HeartIcon />
          <p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">
            {playlist.likes}
          </p>
        </div>

      </div>

      <div className="relative">
        <img
          src={image}
          alt="helix"
          className="hidden sm:block absolute h-full bottom-0 z-10"
        />
        <HelixIcon className="relative" />
      </div>
    </div>
  );
};
