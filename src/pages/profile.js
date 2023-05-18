import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ImageSelector from "../components/ImageSelector"
import { getAuth, updateProfile } from "firebase/auth"
import { updateUsername } from "../redux/authenticationSlice"

export default function Profile() {
	const [isImageSelector, setIsImageSelector] = useState(false)
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
				console.log(username)
				dispatch(updateUsername(username))
			})
		}
	}

  return (
	<div className="grid py-56 place-items-center min-h-screen h-max">
		{isImageSelector && <ImageSelector setIsImageSelector={setIsImageSelector} />}
		<section className="flex flex-col gap-4 items-center">
			<img className="w-40 rounded-full" src={auth.user.image} alt={auth.user.username} />
			<button onClick={() => handleUpload()} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium">Edit image</button>
		</section>
		<section className="p-8 bg-darkGrey shadow-lg w-4/12" >
			<form className="flex flex-col gap-4">
				{usernameError && <p>{usernameError}</p>}
				<input className="bg-darkGrey px-4 py-2 w-full border-2  border-bluish rounded-lg" type="text" name="username" value={username} onChange={handleUsernameChange} id="username" />
				<input disabled={true} className="bg-darkGrey px-4 py-2 w-full border-2 disabled:border-lightGrey disabled:text-lightGrey border-bluish rounded-lg" type="text" name="email" value={auth.user.email}  id="email" />
				<button onClick={handleUpdateUsername} className="bg-darkGrey shadow-lg disabled:border-lightGrey disabled:text-lightGrey transition-all border-2 py-2 px-4 rounded-lg border-bluish font-medium" disabled={username===auth.user.username}>Update</button>
			</form>
		</section>
	</div>
  )
}
