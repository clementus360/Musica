import { useEffect, useState } from "react"

export const VolumeSlider = ({audio}) => {
	const [progress, setProgress] = useState(60)

	useEffect(() => {
		audio.volume = progress/100
	}, [progress])

	const progressChange = (e) => {
		setProgress(() => e.target.value)
	}

  return (
	<div className="relative flex items-center bg-lightGrey w-11/12 h-1 rounded-full">
		<input type="range" className="slide w-full z-10 m-0 bg-none" onChange={progressChange} min="0" max="100" defaultValue={60} name="progress" id="" />

		<div className={`absolute rounded-full bg-secondary left-0 top-0 h-full z-0`}
		style={{
			width: `${progress}%`
		}}
		></div>
	</div>
  )
}
