import React, {useEffect, useRef, useState, useCallback} from 'react'
import PlayControl from './PlayControl/PlayControl'
import StopControl from './StopControl/StopControl'
import PreviousButton from './PreviousButton/PreviousButton'
import NextButton from './NextButton/NextButton'
import DecreasePlaybackControl from './DecreasePlaybackControl/DecreasePlaybackControl'
import IncreasePlaybackControl from './IncreasePlaybackControl/IncreasePlaybackControl'
import ProgressBar from './ProgressBar/ProgressBar'
import { getTime } from '../../utils/utils'
import './Player.css'

function Player({path, onNextBtnClick, onPreviousBtnClick}) {
  const videoElement = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrientTime] = useState('00:00:00')
  const [duration, setDuration] = useState('00:00:00')
  const [progressValue, setProgressValue] = useState(0)

  const timeupdateHandle = useCallback(
    () => {
      videoElement.current.addEventListener('timeupdate', () => {
        const value = 100 * videoElement.current.currentTime / videoElement.current.duration
        if(!Number.isNaN(value)) {
          return setProgressValue(value)
        }
        setCurrientTime(getTime(videoElement.current.currentTime * 1000))
        setDuration(getTime(videoElement.current.duration * 1000))
      })
    },
    []
  )

  useEffect(() => {
    videoElement.current.onloadedmetadata = () => {
      timeupdateHandle()
    }}, [timeupdateHandle])

  const playControlHandler = () => {
    if(isPlaying) {
      videoElement.current.pause()
      setIsPlaying(false)
    } else {
      videoElement.current.play()
      setIsPlaying(true)
    }
  }

  const stopControlHandler = () => {
    videoElement.current.pause()
    setIsPlaying(true)
    videoElement.current.currentTime = 0
    setProgressValue(0)
  }

  const decreaseControlHandler = () => {
    videoElement.current.playbackRate = 0.5
  }

  const increaseControlHandler = () => {
    videoElement.current.playbackRate = 1.5
  }

  const handleNextBtnClick = () => {
    onNextBtnClick()
  }

  const handlePreviousBtnClick = () => {
    onPreviousBtnClick()
  }

  return (
    <main className="player-container">
      <video src={path} className="player" ref={videoElement} preload="metadata"></video>
      <ul className="player__controls">
        <PlayControl handleClick={playControlHandler} />
        <StopControl handleClick={stopControlHandler} />
        <PreviousButton handleClick={handlePreviousBtnClick} />
        <DecreasePlaybackControl handleClick={decreaseControlHandler}/>
        <IncreasePlaybackControl handleClick={increaseControlHandler}/>
        <NextButton handleClick={handleNextBtnClick} />
        <ProgressBar currentTime={currentTime} duration={duration} progressValue={progressValue} />
      </ul>
    </main>
  )
}

export default Player