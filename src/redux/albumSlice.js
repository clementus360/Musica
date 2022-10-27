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
		liked:false,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 1,
				name: 'Let me love you',
				image: image1,
				artist: 'Krisx',
				feature: '',
				duration: '2:02',
				audio: argonne,
				likes: 3,
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 1,
				name: 'Watin man go do',
				image: image2,
				artist: 'Krisx',
				feature: 'African giant',
				duration: '4:42',
				audio: diving,
				likes: 1,
				liked:false,
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
		liked:false,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 2,
				name: 'Nobody',
				image: image3,
				artist: 'Burna',
				feature: '',
				duration: '2:30',
				audio: horror,
				likes: 20,
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 2,
				name: 'Closer',
				image: image4,
				artist: 'Burna',
				feature: 'Obi datti',
				duration: '3:23',
				audio: journey,
				likes: 2,
				liked:false,
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
		liked:false,
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 3,
				name: 'Nobody',
				image: image3,
				artist: 'Ybee',
				feature: '',
				duration: '2:30',
				audio: somber,
				likes: 20,
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 3,
				name: 'Closer',
				image: image4,
				artist: 'Ybee',
				feature: 'Obi datti',
				duration: '3:23',
				audio: oneStep,
				likes: 2,
				liked:false,
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
			const albumIndex = state.findIndex((album => album.id === action.payload.albumId))
			const songIndex = state[albumIndex].songs.findIndex(song => song.id === action.payload.id)
			state[albumIndex].songs[songIndex].likes = state[albumIndex].songs[songIndex].likes + 1
			state[albumIndex].songs[songIndex].liked = true
		},
		likeAlbum: (state, action) => {
			const albumIndex = state.findIndex((album => album.id === action.payload.id))
			state[albumIndex].likes = state[albumIndex].likes + 1
			state[albumIndex].liked = true
		},
	}
})

export const { likeAlbum, likeSong, setCurretSong } = albums.actions;
export default albums.reducer;
