import React, { useContext } from 'react';
import { MusicContext } from 'context/MusicContext';

import css from './MusicToggleButton.module.scss';

import playIcon from 'assets/images/icons/play.svg';
import pauseIcon from 'assets/images/icons/pause.svg';

const MusicToggleButton = () => {
  const { isPlaying, toggleMusic } = useContext(MusicContext);

  return (
    <button
      className={`${css.button} ${isPlaying ? css['button--active'] : ''}`}
      onClick={toggleMusic}
    >
      {isPlaying ? (
        <img src={pauseIcon} alt="pause" />
      ) : (
        <img src={playIcon} alt="play" />
      )}
    </button>
  );
};

export default MusicToggleButton;
