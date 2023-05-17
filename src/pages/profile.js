import { useState } from "react"
import { useSelector } from "react-redux"
import ImageSelector from "../components/ImageSelector"

export default function Profile() {
	const [isImageSelector, setIsImageSelector] = useState(false)
	const auth = useSelector(state => state.authentication)
	console.log(auth.user)

	function handleUpload() {
		setIsImageSelector(true)
	}

  return (
	<div className="grid place-items-center min-h-screen h-max">
		{isImageSelector && <ImageSelector setIsImageSelector={setIsImageSelector} />}
		<section className="flex flex-col gap-4 items-center">
			<img className="w-40 rounded-full" src={auth.user.image} alt={auth.user.username} />
			<button onClick={() => handleUpload()} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium">Edit image</button>
			<h1 className="font-semibold text-xl">{auth.user.username}</h1>
		</section>
	</div>
  )
}
