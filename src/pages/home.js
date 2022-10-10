import { Dashboard } from '../components/Home/Dashboard'
import { NewReleases } from '../components/Home/NewReleases'
import { Popular } from '../components/Home/Popular'

export const Home = () => {
  return (
	<div className='mt-24 w-11/12 m-auto sm:ml-32 2xl:mt-40 2xl:ml-44'>
		<Dashboard />
		<NewReleases />
		<Popular />
	</div>
  )
}
