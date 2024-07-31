import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import { playerContext } from './context/PlayerContext.jsx';

const App = () => {
  const { audioRef, track } = useContext(playerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;
