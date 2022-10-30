import { createSlice } from "@reduxjs/toolkit";

import  albumImage from "./images/Lead-image.png"

import idme from "./songs/IDME/Cover.jpg"
import umwijima from "./songs/Umwijima/Cover.jpg"

import schizo from "./songs/IDME/03 - Schizophrenic.mp3"
import dontLet from "./songs/IDME/09 - Don't Leave.mp3"
import escape from "./songs/IDME/11 - Escape.mp3"

import mwene from "./songs/Imyotsi/02. Mwene Kanyarwanda.mp3"
import shadiboo from "./songs/Imyotsi/05. Shadiboola (ft. Remy Stones).mp3"
import kumiguruko from "./songs/Imyotsi/08. Kumiguruko.mp3"

import ewana from "./songs/Ndi Sana/01. Ewana.mp3"
import naAvoka from "./songs/Ndi Sana/02. Na Avoka.mp3"
import ndiSana from "./songs/Ndi Sana/03. Ndi Sana.mp3"

import mariya from "./songs/Umwijima/02 - Mariya Yohana.mp3"
import ntago from "./songs/Umwijima/05 - Ntago Nakwibagiwe.mp3"
import nyabingi from "./songs/Umwijima/08 - Nyabingi.mp3"

const initialState = [
	{
		id: 1,
	    name: "Ndi Sana",
	    image: albumImage,
		artist: 'Placide Irad',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 3,
	    totalLength: Math.floor(Math.random() * 10),
		likes: Math.floor(Math.random() * 10),
		liked:false,
		release: new Date(new Date() - Math.random()*(1e+12)),
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 1,
				name: 'Ewana',
				image: albumImage,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: ndiSana,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 1,
				name: 'Na avoka',
				image: albumImage,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: naAvoka,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 1,
				name: 'Ndi sana',
				image: albumImage,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: ewana,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
		]
	},
	{
		id: 2,
	    name: "Umwijima",
	    image: umwijima,
		artist: 'Yannick MYK',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 3,
	    totalLength: Math.floor(Math.random() * 10),
		likes: Math.floor(Math.random() * 10),
		liked:false,
		release: new Date(new Date() - Math.random()*(1e+12)),
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 2,
				name: 'Mariya Yohana',
				image: umwijima,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: mariya,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 2,
				name: 'Ntago Nakwibagiwe',
				image: umwijima,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: ntago,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 2,
				name: 'Nyabingi',
				image: umwijima,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: nyabingi,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
		]
	},
	{
		id: 3,
	    name: "IDME",
	    image: idme,
		artist: 'Placide Irad',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 3,
	    totalLength: Math.floor(Math.random() * 10),
		likes: Math.floor(Math.random() * 10),
		liked:false,
		release: new Date(new Date() - Math.random()*(1e+12)),
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 3,
				name: 'Schizophrenic',
				image: idme,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: schizo,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 3,
				name: "Don't leave",
				image: idme,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: dontLet,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 3,
				name: 'Escape',
				image: idme,
				artist: 'Placide Irad',
				feature: '',
				duration: '2:02',
				audio: escape,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
		]
	},
	{
		id: 4,
	    name: "Imyotsi",
	    image: albumImage,
		artist: 'Yannick MYK',
	    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsum culpa ipsam ex voluptate ad. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	    songNumber: 3,
	    totalLength: Math.floor(Math.random() * 10),
		likes: Math.floor(Math.random() * 10),
		liked:false,
		release: new Date(new Date() - Math.random()*(1e+12)),
	    songs: [
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 4,
				name: 'Mwene Kanyarwanda',
				image: albumImage,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: mwene,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 4,
				name: 'Shadiboola',
				image: albumImage,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: shadiboo,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
			{
				id: Math.floor(Math.random() * 10000),
				albumId: 4,
				name: 'Kumiguruko',
				image: albumImage,
				artist: 'Yannick MYK',
				feature: '',
				duration: '2:02',
				audio: kumiguruko,
				likes: Math.floor(Math.random() * 10),
				liked:false,
			},
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
