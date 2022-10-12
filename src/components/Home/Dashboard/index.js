import { Display } from "./display";
import { TopCharts } from "./topCharts";

import profile1 from "./src/Ellipse 2.png"
import profile2 from "./src/Ellipse 3.png"
import profile3 from "./src/Ellipse 4.png"
import profile4 from "./src/Ellipse 5.png"
import chartImage from './src/Lead-image.png'

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

  const charts = [
    {
      id:'1',
      name: 'Golden age of 80s',
      artist: 'Sean Swadder',
      duration: '2:34:45',
      image: chartImage,
    },
    {
      id:'2',
      name: 'Reggae "n" blues',
      artist: 'DJ Yk Mule',
      duration: '1:02:42',
      image: chartImage,
    },
    {
      id:'3',
      name: "Tommorow's tunes",
      artist: 'Obi Datti',
      duration: '2:01:25',
      image: chartImage,
    },
  ]

  return (
    <section className="flex flex-col w-screen sm:flex-row gap-6">
      <Display playlist={playlist}/>
      <TopCharts charts={charts}/>
    </section>
  );
};
