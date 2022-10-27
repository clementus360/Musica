import { createSlice } from "@reduxjs/toolkit";

export const likes = createSlice({
	name: 'likes',
	initialState: [],
	reducers: {
		putlikes: (state, action) => {
			state = state.push(action.payload)
		},
	}
})

export const { putlikes } = likes.actions;
export default likes.reducer;
