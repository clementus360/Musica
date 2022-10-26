import { createSlice } from "@reduxjs/toolkit";

import image1 from "./images/Rectangle 14 (1).png"
import image2 from "./images/Rectangle 14 (2).png"
import image3 from "./images/Rectangle 14 (3).png"
import image4 from "./images/Rectangle 14 (4).png"
import  albumImage from "./images/Lead-image.png"

import argonne from "./songs/Argonne - Zachariah Hickman.mp3"
import diving from "./songs/Diving in Backwards - Nathan Moore.mp3"
import horror from "./songs/Horror House - Aaron Kenny.mp3"
import journey from "./songs/Journeyman - Aakash Gandhi.mp3"
import oneStep from "./songs/One Step Closer - Aakash Gandhi.mp3"
import somber from "./songs/Somber - Audionautix.mp3"

const initialState = [
	{
		id: 1,
	    name: "Tomorrow's tunes",
	    image: albumImage,
		artist: 'Krisx',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 64,
	    totalLength: 16,
		likes: 24,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Let me love you',
				image: image1,
				artist: 'Krisx',
				feature: '',
				duration: '2:02',
				audio: argonne,
				likes: 3,
			},
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Watin man go do',
				image: image2,
				artist: 'Krisx',
				feature: 'African giant',
				duration: '4:42',
				audio: diving,
				likes: 1,
			},
		]
	},
	{
		id: 2,
	    name: "Sunday's tunes",
	    image: albumImage,
		artist: 'Burna',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 68,
	    totalLength: 12,
		likes: 12,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Nobody',
				image: image3,
				artist: 'Burna',
				feature: '',
				duration: '2:30',
				audio: horror,
				likes: 20,
			},
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Closer',
				image: image4,
				artist: 'Burna',
				feature: 'Obi datti',
				duration: '3:23',
				audio: journey,
				likes: 2,
			}
		]
	},
	{
		id: 3,
	    name: "Week in",
	    image: albumImage,
		artist: 'Ybee',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 68,
	    totalLength: 12,
		likes: 16,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Nobody',
				image: image3,
				artist: 'Ybee',
				feature: '',
				duration: '2:30',
				audio: somber,
				likes: 20,
			},
			{
				id: Math.floor(Math.random() * 10000),
				name: 'Closer',
				image: image4,
				artist: 'Ybee',
				feature: 'Obi datti',
				duration: '3:23',
				audio: oneStep,
				likes: 2,
			}
		]
	},
]

export const albums = createSlice({
	name: 'albums',
	initialState,
	reducers: {
		setCurretSong: (state, action) => {
			return state = action.payload
		},
		likeSong: (state, action) => {
			const index = state.indexOf(action.payload)
			console.log(index)
		}
	}
})

export const { likeSong, setCurretSong } = albums.actions;
export default albums.reducer;
