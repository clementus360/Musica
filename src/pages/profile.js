import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ImageSelector from "../components/ImageSelector"
import { getAuth, updateProfile } from "firebase/auth"
import { updateUsername } from "../redux/authenticationSlice"
import { Tag } from "../components/Collections/tag"
import { AddMusicIcon } from "../components/Album/src/addMusicIcon"
import CreateAlbum from "../components/CreateAlbum"

export default function Profile() {
	const [isImageSelector, setIsImageSelector] = useState(false)
	const [isCreateAlbum, setIsCreateAlbum] = useState(false)
	const [active, setActive]  = useState(1)
	const auth = useSelector(state => state.authentication)
	const [username,setUsername] = useState(auth.user.username)
	const [usernameError,setUsernameError] = useState("")
	const dispatch = useDispatch()

	function handleUpload() {
		setIsImageSelector(true)
	}

	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	const validateForm = () => {
		const minUsernameLength = 3;

		if (!username.trim()) {
			setUsernameError("Username cannot be empty")
			return false;
		}

		if (username.trim().length < minUsernameLength) {
			setUsernameError("Username must be at least 3 characters long.");
			return false;
		}

		setUsernameError("")

		return true;
	};

	const handleUpdateUsername = async (e) => {
		e.preventDefault()
		if (validateForm()){
			const authentication = getAuth()
			const user = authentication.currentUser

			await updateProfile(user, {displayName: username}).then(user => {
				dispatch(updateUsername(username))
			})
		}
	}

	const tags = [
		{
		  id: 1,
		  title: 'My Albums'
		},
		{
		  id: 2,
		  title: 'My Singles'
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

  return (
	<div className="flex flex-col gap-12 w-screen min-h-screen h-max">
		{isCreateAlbum && <CreateAlbum setIsCreateAlbum={setIsCreateAlbum} /> }
		{isImageSelector && <ImageSelector setIsImageSelector={setIsImageSelector} />}
		<section className="flex flex-col sm:flex-row pt-24 w-screen items-center justify-center gap-8 sm:gap-12">
			<div>
				<div className='group relative aspect-square h-56 max-h-56'>
					<img className="max-h-full max-w-full object-cover aspect-square rounded-full" src={auth.user.image} alt={auth.user.username} />
					<button onClick={() => handleUpload()} className="absolute opacity-0 group-hover:opacity-100 transition-opacity top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium">Edit</button>
				</div>
			</div>
			<div>
				<form className="flex flex-col gap-4">
					{usernameError && <p>{usernameError}</p>}
					<input className="bg-darkGrey px-4 py-2 w-full border-2  border-bluish rounded-lg" type="text" name="username" value={username} onChange={handleUsernameChange} id="username" />
					<button onClick={handleUpdateUsername} className="bg-darkGrey shadow-lg disabled:border-lightGrey disabled:text-lightGrey transition-all border-2 py-2 px-4 rounded-lg border-bluish font-medium" disabled={username===auth.user.username}>Update</button>
				</form>
			</div>
		</section>
		<section className=" flex flex-col items-center gap-8 p-6 w-10/12 shadow-lg bg-darkGrey self-center">
			<div>
				<div className="w-screen flex gap-4 justify-center">
			      {displayTags(tags)}
			    </div>
			</div>

			{active === 1 && <div>
				<button onClick={() => setIsCreateAlbum(true)} className="cursor-pointer flex items-center gap-2 sm:gap-4 p-2 sm:p-2 pl-2 pr-2 sm:pl-4 sm:pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey hover:bg-bluish w-max rounded-4xl bg-opacity-20 backdrop-blur-lg transition-all">
					<AddMusicIcon />
					<p>Create New Album</p>
				</button>
			</div>}

			{active === 2 && <div>
				<button onClick={()=>{}} className="cursor-pointer flex items-center gap-2 sm:gap-4 p-2 sm:p-2 pl-2 pr-2 sm:pl-4 sm:pr-4 font-thin text-sm 2xl:text-xl 4xl:text-3xl text-white bg-lightGrey hover:bg-bluish w-max rounded-4xl bg-opacity-20 backdrop-blur-lg transition-all">
					<AddMusicIcon />
					<p>Upload New Song</p>
				</button>
			</div>}
		</section>
	</div>
  )
}
