import { configureStore } from '@reduxjs/toolkit'
import playlistSlice from './playlistSlice'
import currentSlice from './currentSlice'
import collectionSlice from './collectionSlice'
import albumSlice from './albumSlice'

const store = configureStore({
  reducer: {
    playlist: playlistSlice,
    currentSong: currentSlice,
    collection: collectionSlice,
    albums: albumSlice,
  },
})

export default store
