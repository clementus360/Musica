import { createSlice } from "@reduxjs/toolkit";

const initialState = 0

export const currentSong = createSlice({
	name: 'currentSong',
	initialState,
	reducers: {
		setCurretSong: (state, action) => {
			return state = action.payload
		}
	}
})

export const { setCurretSong } = currentSong.actions;
export default currentSong.reducer;
