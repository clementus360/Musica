import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from './playlistSlice'
import currentSlice from './currentSlice'
import collectionSlice from './collectionSlice'
import albumSlice from './albumSlice'
import likeSlice from './likeSlice'
import authenticationSlice from './authenticationSlice'

const store = configureStore({
  reducer: {
    authentication:  authenticationSlice,
    playlist: playlistSlice,
    currentSong: currentSlice,
    collection: collectionSlice,
    albums: albumSlice,
    likeCollection: likeSlice
  },
})

export default store
