export interface IPlayerProps {
  path: string,
  onNextBtnClick: () => void,
  onPreviousBtnClick: () => void
}

export interface ICommonProps {
  handleClick: () => void
}

export interface IProgressBarProps {
  currentTime: string, 
  duration: string, 
  progressValue: number
}

export interface IHeaderProps {
  onOpenFileClick: () => void, 
  onOpenFolderClick: () => void, 
  onExitClick: () => void, 
  onMinimizableBtnClick: () => void, 
  onMaximizableBtnClick: () => void, 
  onExitCrossBtnClick: () => void
}

export interface IWinCrlsProps {
  onMinimizableBtnClick: () => void, 
  onMaximizableBtnClick: () => void, 
  onExitCrossBtnClick: () => void
}

export interface INavbarProps {
  onOpenFileClick: () => void, 
  onOpenFolderClick: () => void, 
  onExitClick: () => void, 
}