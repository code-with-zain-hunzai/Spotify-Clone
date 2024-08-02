// Player.js
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { playerContext } from '../context/PlayerContext';
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const Player = () => {
    const {
        track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, shuffle, volume, adjustVolume, isMuted, toggleMute
    } = useContext(playerContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-center px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12' src={track.image} alt="" />
                <div className='text-white'>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className='flex gap-4'>
                    <img onClick={shuffle} className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
                    {playStatus
                        ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
                        : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />}
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75">
                <img className='w-4' src={assets.play_icon} alt="Play" />
                <img className='w-4' src={assets.mic_icon} alt="Mic" />
                <img className='w-4' src={assets.queue_icon} alt="Queue" />
                <div onClick={toggleMute} className='w-4 cursor-pointer'>
                    {isMuted ? <HiSpeakerXMark className='text-white' /> : <HiSpeakerWave className='text-white' />}
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume * 100}
                    onChange={(e) => adjustVolume(e)}
                    className='cursor-pointer w-24 h-1 bg-green-800 rounded-full'
                    style={{
                        backgroundSize: `${volume * 100}% 100%`,
                        color: 'linear-gradient(to right, #22543d, #22543d)',
                    }}
                />
                <img className='w-4' src={assets.mini_player_icon} alt="Mini Player" />
                <img className='w-4' src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    );
};

export default Player;
