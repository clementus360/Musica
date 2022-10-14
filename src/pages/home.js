import { Dashboard } from '../components/Home/Dashboard'
import { NewReleases } from '../components/Home/NewReleases'
import { Popular } from '../components/Home/Popular'

export const Home = () => {
  return (
	<section className='flex flex-col gap-8 w-screen overflow-hidden ml-0 mt-24 m-auto sm:pl-32 2xl:mt-40 2xl:pl-44 pb-24'>
		<Dashboard />
		<NewReleases />
		<Popular />
	</section>
  )
}
