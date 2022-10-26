import { useSelector } from "react-redux";

import { Display } from "./display";
import { TopCharts } from "./topCharts";

import profile1 from "./src/Ellipse 2.jpg"
import profile2 from "./src/Ellipse 3.jpg"
import profile3 from "./src/Ellipse 4.jpg"
import profile4 from "./src/Ellipse 5.jpg"

export const Dashboard = () => {

  const playlist = {
		id: 1,
		name: 'R & B Hits',
		description: 'All mine, Lie again, Pretty call me everyday, Out of time, No love, Bad habit, and so much more',
		likes: '33k Likes',
		likesTemplate: [
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
	}

  const charts = useSelector(state => state.albums)

  return (
    <section className="flex flex-col w-screen sm:flex-row gap-6">
      <Display playlist={playlist}/>
      <TopCharts charts={charts}/>
    </section>
  );
};
