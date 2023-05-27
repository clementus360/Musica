import { useState } from 'react'

export default function CreateAlbum({setIsCreateAlbum}) {
	const [file, setFile] = useState("")
	const [error, setError] = useState("")

	const handleChange = (event) => {
		setError("")
		setFile(event.target.files[0]);
		console.log(event.target.files[0])
	}

	const handleUpload = async () => {
		if (!file) {
			setError("upload something")
		}

	}

	const handleCancel = () => {
		setIsCreateAlbum(false)
	}

  return (
	<div className='absolute transition-all bg-darkGrey bg-opacity-90 z-50 grid place-items-center w-screen h-screen'>
		<div className='flex flex-col w-screen sm:w-4/12 gap-4 z-10 bg-darkGrey shadow-lg p-4'>
			{error && <p className='text-redish'>{error}</p>}
			{file &&
				<div className='flex items-center justify-center aspect-square max-h-56'><img className='max-h-full max-w-full object-contain ' src={URL.createObjectURL(file)} alt="profile" /></div>
			}
			<input type="file" placeholder='Album Cover' className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium" onChange={handleChange} accept="image/*" />
			<input className="bg-darkGrey px-4 py-2 w-full border-2  border-bluish rounded-lg" type="text" name="name" id="name" placeholder='Album name' />
			<textarea className="bg-darkGrey px-4 py-2 h-32 w-full border-2  border-bluish rounded-lg" type="text" name="name" id="name" placeholder='Album name' />
			<div className='flex gap-12 justify-between'>
				<button onClick={() => handleCancel()} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-redish font-medium">Cancel</button>
				<button onClick={() => handleUpload()} className="bg-darkGrey shadow-lg border-2 py-2 px-4 rounded-lg border-bluish font-medium">Create Album</button>
			</div>
		</div>
	</div>
  )
}
