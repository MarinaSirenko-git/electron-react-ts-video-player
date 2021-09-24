import React, {useEffect, useRef, useState, useCallback} from 'react'
import PlayControl from './PlayControl/PlayControl'
import StopControl from './StopControl/StopControl'
import PreviousButton from './PreviousButton/PreviousButton'
import NextButton from './NextButton/NextButton'
import DecreasePlaybackControl from './DecreasePlaybackControl/DecreasePlaybackControl'
import IncreasePlaybackControl from './IncreasePlaybackControl/IncreasePlaybackControl'
import ProgressBar from './ProgressBar/ProgressBar'
import { getTime } from '../../utils/utils'
import { IPlayerProps } from '../../interfaces/interfaces'
import './Player.css'

const Player: React.FC<IPlayerProps> = ({path, onNextBtnClick, onPreviousBtnClick, isDisabledPrev, isDisabledNext}) => {
  const videoElement = useRef<HTMLVideoElement>(null)
  const video = videoElement.current!
  const [isPlaying, setIsPlaying] = useState<Boolean>(false)
  const [currentTime, setCurrientTime] = useState<string>('00:00:00')
  const [duration, setDuration] = useState<string>('00:00:00')
  const [progressValue, setProgressValue] = useState<number>(0)
  
  const timeupdateHandle = useCallback(
    () => {
      setDuration(getTime(video.duration * 1000))
      video.addEventListener('timeupdate', () => {
        setCurrientTime(getTime(video.currentTime * 1000))
        const value = 100 * video.currentTime / video.duration
        if(!Number.isNaN(value)) setProgressValue(value)
      })
    },
    [video]
  )

  useEffect(() => {
    if(video) {
      video.onloadedmetadata = () => {
        timeupdateHandle()
      }
    }}, [timeupdateHandle, video, currentTime])

  const playControlHandler = () => {
    if(isPlaying) {
      video.pause()
      setIsPlaying(false)
    } else {
      video.play()
      setIsPlaying(true)
    }
  }

  const stopControlHandler = () => {
    video.pause()
    setIsPlaying(true)
    video.currentTime = 0
    setProgressValue(0)
  }

  const decreaseControlHandler = () => {
    video.playbackRate = 0.5
  }

  const increaseControlHandler = () => {
    video.playbackRate = 1.5
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
        <PreviousButton handleClick={handlePreviousBtnClick} isDisabled={isDisabledPrev}/>
        <DecreasePlaybackControl handleClick={decreaseControlHandler}/>
        <IncreasePlaybackControl handleClick={increaseControlHandler}/>
        <NextButton handleClick={handleNextBtnClick} isDisabled={isDisabledNext} />
        <ProgressBar currentTime={currentTime} duration={duration} progressValue={progressValue} />
      </ul>
    </main>
  )
}

export default Player