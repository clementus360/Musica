import { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { NextIcon } from './src/nextIcon'
import { PlayerIcon } from './src/playerIcon'
import { PreviousIcon } from './src/previousIcon'
import { RepeatIcon } from './src/repeatIcon'
import { ShuffleIcon } from './src/shuffleIcon'
import { VolumeIcon } from './src/volumeIcon'
import { ProgressBar } from './progressBar'
import { VolumeSlider } from './volumeSlider'
import { PauserIcon } from './src/pauserIcon'

import { setCurretSong } from '../../redux/currentSlice'

import './index.css'
import { RepeatActiveIcon } from './src/repeatActiveIcon'

export const Player = () => {
  const [progress, setProgress] = useState(0)
  const [isPlayed, setIsPlayed] = useState(false)
  const [duration, setDuration] = useState()
  const [isLooped, setIsLooped] = useState(false)
  const [audio, setAudio] = useState(new Audio())

  const currentSong = useSelector(state => state.currentSong)
  const playlist = useSelector(state => state.playlist)
  const dispatch =  useDispatch()
  const song = playlist[currentSong]

  const next = () => {
    if (currentSong === playlist.length-1)
      dispatch(setCurretSong(0))
    else
      dispatch(setCurretSong(currentSong+1))
  }

  const previous = () => {
    if (currentSong === 0)
      dispatch(setCurretSong(playlist.length-1))
    else
      dispatch(setCurretSong(currentSong-1))
  }

  useEffect(()  => {
    if(playlist[currentSong]) {
      audio.src = playlist[currentSong].audio
      audio.play()
      audio.onloadedmetadata  = () => {
        setDuration(audio.duration)
      }
      audio.onended = () => {
        console.log(isLooped)
        if(!isLooped) {
          console.log('tree')
          next()
        }
      }
      setIsPlayed(true)
    }
  }, [playlist,currentSong])

  useEffect(() => {
    audio.ontimeupdate = () => {
      setProgress(() => ((audio.currentTime*100)/duration))
    }
  }, [progress])

  const togglePlay = () => {
    if (audio.paused) {
      audio.play()
      setIsPlayed(true)
    } else if(!audio.paused) {
      audio.pause()
      setIsPlayed(false)
    }
  };

  const toggleLoop = () => {
    audio.loop = isLooped? false:true
    setIsLooped(() => audio.loop)
  }

  const playerButton = () => {
    return isPlayed? <PauserIcon audio={audio}/>:<PlayerIcon audio={audio}/>
  }

  const repeatButton = () => {
    return isLooped? <RepeatActiveIcon />:<RepeatIcon />
  }


  return (
    <div className={`fixed z-50 transition-all w-full ${song? 'bottom-0 opacity-100': '-bottom-16 opacity-0'}`}>
      {song &&
        <section className='bg-darkGrey backdrop-blur-xl bg-opacity-60 border-t-1 sm:pl-32 p-4 border-lightGrey  w-full grid grid-cols-2 sm:grid-cols-[1fr_4fr_1fr] items-center'>
          <div className='flex items-center gap-4'>
            <img src={song.image} className='h-20 w-20' alt="song" />
            <div className='flex flex-col'>
              <h2 className='font-medium text-lg 2xl:text-2xl 4xl:text-4xl'>
                {song.name}
              </h2>
              <p className='font-light text-sm 2xl:text-xl 4xl:text-3xl opacity-50'>
                {song.feature? `${song.artist} - ${song.feature}`:`${song.artist}`}
               </p>
            </div>
          </div>

          <div className='flex flex-col gap-4 w-max sm:w-full justify-self-end sm:justify-self-center items-center'>
            <div className='flex gap-4 sm:gap-12 items-center'>

              <div className="hidden sm:block">
                <ShuffleIcon />
              </div>

              <div className="hidden sm:block" onClick={previous}>
                <PreviousIcon  />
              </div>

              <div onClick={togglePlay}>
                {playerButton()}
              </div>

              <div onClick={next}>
                <NextIcon />
              </div>

              <div className="hidden sm:block" onClick={toggleLoop}>
                {repeatButton()}
              </div>

            </div>
                <div className="hidden sm:block w-full">
                  <ProgressBar progress={progress} audio={audio} />
                </div>
          </div>

          <div className='hidden sm:flex gap-2 items-center'>
            <VolumeIcon />
            <VolumeSlider audio={audio} />
          </div>
        </section>
      }
    </div>
  )
}
