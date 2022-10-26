import { useEffect, useRef, useState } from "react"

export const ProgressBar = ({progress, audio}) => {
	const [inProgress, setInProgress] = useState('0')
	const range = useRef()
	useEffect(() => {
		range.current.value = progress
		setInProgress(()=> range.current.value)
	}, [progress])

	const setChange = (e) => {
		console.log(e.target.value)
		range.current.value = e.target.value
		audio.currentTime = e.target.value*audio.duration/100
	}

  return (
	<div className="relative flex items-center bg-lightGrey w-11/12 h-1 rounded-full">
		<input type="range"  ref={range} className="slide w-full z-10 m-0 bg-none" min="0" max="100" onChange={setChange} defaultValue="0" name="progress" id="" />
		<div className={`absolute rounded-full bg-secondary left-0 top-0 h-full z-0`}
		style={{
			width: `${inProgress}%`
		}}
		></div>
	</div>
  )
}
