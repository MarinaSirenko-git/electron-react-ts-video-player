import React, {useEffect, useRef, useState} from 'react'
import PlayControl from './PlayControl/PlayControl'
import StopControl from './StopControl/StopControl'
import PreviousButton from './PreviousButton/PreviousButton'
import NextButton from './NextButton/NextButton'
import DecreasePlaybackControl from './DecreasePlaybackControl/DecreasePlaybackControl'
import IncreasePlaybackControl from './IncreasePlaybackControl/IncreasePlaybackControl'
import ProgressBar from './ProgressBar/ProgressBar'
import getTime from '../../utils/utils'
import './Player.css'

function Player({path}) {
  console.log(path)
  const videoElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);
  const [currentTime, setCurrientTime] = useState('00:00:00');
  const [duration, setDuration] = useState('00:00:00');
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    videoElement.current.addEventListener('timeupdate', () => {
      setCurrentTimeMs(videoElement.current.currentTime);
      setDurationMs(videoElement.current.duration )
      const value = 100 * currentTimeMs / durationMs;
      setProgressValue(value);
      setCurrientTime(getTime(currentTimeMs * 1000));
      setDuration(getTime(durationMs * 1000));
    })
  }, [currentTimeMs, durationMs])

  const playControlHandler = () => {
    if(isPlaying) {
      videoElement.current.pause();
      setIsPlaying(false)
    } else {
      videoElement.current.play();
      setIsPlaying(true)
    }
  }

  const stopControlHandler = () => {
    videoElement.current.pause();
    setIsPlaying(true);
    setCurrentTimeMs(0)
    setProgressValue(0);
  }

  const decreaseControlHandler = () => {
    videoElement.current.playbackRate = 0.5;
  }

  const increaseControlHandler = () => {
    videoElement.current.playbackRate = 1.5;
  }

  return (
    <main className="player-container">
      <video className="player" ref={videoElement}>
        <source src={`C:\\Users\\Marina\\Videos\\Captures\\Лицо. Ревитоника\\Неделя_1\\withTrainer.mp4`} type="video/mp4" />
      </video>
      <ul className="player__controls">
        <PlayControl handleClick={playControlHandler} />
        <StopControl handleClick={stopControlHandler} />
        <PreviousButton />
        <DecreasePlaybackControl handleClick={decreaseControlHandler}/>
        <IncreasePlaybackControl handleClick={increaseControlHandler}/>
        <NextButton />
        <ProgressBar currientTime={currentTime} duration={duration} progressValue={progressValue} />
      </ul>
    </main>
  );
}

export default Player