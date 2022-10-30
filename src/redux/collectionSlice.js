import { createSlice } from "@reduxjs/toolkit";

export const collection = createSlice({
	name: 'collection',
	initialState: [],
	reducers: {
		putCollection: (state, action) => {
			state = state.push(action.payload)
		},
	}
})

export const { putCollection } = collection.actions;
export default collection.reducer;
