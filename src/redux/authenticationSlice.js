import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
		},
		updateUsername: (state,action) => {
			state.user.username = action.payload
		}
	}
})

export const { login,logout,updateImage,updateUsername } = authentication.actions;
export default authentication.reducer;
