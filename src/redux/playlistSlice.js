import { createSlice } from "@reduxjs/toolkit";

export const playlist = createSlice({
	name: 'playlist',
	initialState: [],
	reducers: {
		putSong: (state, action) => {
			state = [action.payload]
		},
		addSong: (state, action) => {
			state = state.push(action.payload)
		},
		addAlbum: (state, action) => {
			state = action.payload.songs.map(song => state.push(song))
		}

	}
})

export const { addAlbum, putSong, addSong } = playlist.actions;
export default playlist.reducer;
