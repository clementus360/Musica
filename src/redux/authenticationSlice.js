import { createSlice } from "@reduxjs/toolkit";

export const authentication = createSlice({
	name: 'authentication',
	initialState: {
		user: null,
		isLogged: false
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload
			state.isLogged = true
		},
		logout: state => {
			state.user = null
			state.isLogged = false
		},
		updateImage: (state,action) => {
			state.user.image = action.payload
		}
	}
})

export const { login,logout,updateImage } = authentication.actions;
export default authentication.reducer;
