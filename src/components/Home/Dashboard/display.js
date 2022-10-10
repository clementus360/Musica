import { HelixIcon } from "./src/helixIcon"
import image from "./src/Pexels Photo by Eric Esma.png"
import profile1 from "./src/Ellipse 2.png"
import profile2 from "./src/Ellipse 3.png"
import profile3 from "./src/Ellipse 4.png"
import profile4 from "./src/Ellipse 5.png"
import { HeartIcon } from "./src/heartIcon"

export const Display = () => {

	const profiles = [
		{
			id: 1,
			src: profile1
		},
		{
			id: 2,
			src: profile2
		},
		{
			id: 3,
			src: profile3
		},
		{
			id: 4,
			src: profile4
		}
	]

	const displayLikes = (profiles) => {
		return (profiles.map(profile => {
			return <img className="w-10 h-10 rounded-full" src={profile.src} key={profile.id} alt="profile" />
		}))
	}

  return (
	<div className="bg-bluish w-full h-[60vh] sm:w-7/12 sm:h-[50vh] rounded-3xl sm:rounded-4xl overflow-hidden sm:grid grid-cols-2 p-8 sm:p-0">
		<div className="flex flex-col justify-center gap-8 sm:gap-16 xl:gap-20 2xl:gap-32 sm:ml-16">
			<p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">Current playlist</p>
			<div className="flex flex-col gap-2 mt-40 xs:mt-[50vw] sm:mt-0">
				<h1 className="font-bold text-3xl xs:text-4xl 2xl:text-6xl">R & B Hits</h1>
				<p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">All mine, Lie again, Pretty call me everyday, Out of time, No love, Bad habit, and so much more</p>
			</div>
			<div className="flex gap-4 items-center">
				<div className="flex">
					{displayLikes(profiles)}
				</div>
				<HeartIcon />
				<p className="font-light text-xs xs:text-sm 2xl:text-xl 4xl:text-3xl">33k Likes</p>
			</div>
		</div>
		<div className="relative">
			<img src={image} alt="helix" className="hidden sm:block absolute h-full bottom-0 z-10"/>
			<HelixIcon className="relative" />
		</div>
	</div>
  )
}
