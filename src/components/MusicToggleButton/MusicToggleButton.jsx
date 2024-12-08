import React, { useState, useEffect } from 'react';

import css from './MusicToggleButton.module.scss';

import playIcon from 'assets/images/icons/play.svg';
import pauseIcon from 'assets/images/icons/pause.svg';

import soundSrc from 'assets/audio/sound.mp3';

const MusicToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const newAudio = new Audio(soundSrc);
    newAudio.loop = true;
    setAudio(newAudio);

    return () => {
      if (newAudio) {
        newAudio.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

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
