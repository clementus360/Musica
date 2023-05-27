import { getAuth, updateProfile } from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateImage } from '../../redux/authenticationSlice'
import { ThreeDots } from 'react-loader-spinner'

export default function ImageSelector({setIsImageSelector}) {
	const [file, setFile] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")
	const dispatch = useDispatch()
	const authentication = useSelector(state => state.authentication)

	const handleChange = (event) => {
		setError("")
		setFile(event.target.files[0]);
		console.log(event.target.files[0])
	}

	const handleUpload = async () => {
		setLoading(true)
		if (!file) {
			setError("upload something")
		}
		const auth = getAuth();
		const user = auth.currentUser
		const storage = getStorage()
		console.log(authentication.user.id, authentication.user.image)
		const profilePictureRef = ref(storage, `profile/${authentication.user.id}.png`)


		try {

			const ImageUrl = await uploadBytes(profilePictureRef, file).then(async (snapshot) => {
				console.log(snapshot)
				return await getDownloadURL(snapshot.ref)
			})

			await updateProfile(user, {photoURL: ImageUrl}).then(user => {
				dispatch(updateImage(ImageUrl))
			}).then(() => {
				setLoading(false)
				setIsImageSelector(false)
			})

		} catch(err) {
			setLoading(false)
			setError(err.message)
		}

	}

	const handleCancel = () => {
		setIsImageSelector(false)
	}

  return (
	<div className='absolute transition-all bg-darkGrey bg-opacity-90 z-50 grid place-items-center w-screen h-screen'>
		<div className='flex flex-col w-screen sm:w-4/12 gap-4 z-10 bg-darkGrey shadow-lg p-4'>
			{error && <p className='text-redish'>{error}</p>}
			{file &&
				<div className='flex items-center justify-center aspect-square max-h-56'><img className='max-h-full max-w-full object-contain ' src={URL.createObjectURL(file)} alt="profile" /></div>
			}
			<input type="file" className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium" onChange={handleChange} accept="image/*" />
			<div className='flex gap-12 justify-between'>
				<button onClick={() => handleCancel()} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-redish font-medium">Cancel</button>
				{loading?
					<ThreeDots
					height="40"
					width="40"
					radius="9"
					color="#609EAF"
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
					 />:<button onClick={() => handleUpload()} disabled={loading? true:false} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium">Upload image</button>
				}
			</div>
		</div>
	</div>
  )
}
