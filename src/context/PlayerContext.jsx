import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const playerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [previousVolume, setPreviousVolume] = useState(1);
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
        if (audioRef.current.muted) {
            setVolume(previousVolume);
        } else {
            setPreviousVolume(volume);
            setVolume(0);
        }
        audioRef.current.muted = !audioRef.current.muted;
    };

    const adjustVolume = (e) => {
        const newVolume = e.target.value / 100;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        if (newVolume === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };

    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    const shuffle = async () => {
        let randomIndex = Math.floor(Math.random() * songsData.length);
        while (songsData[randomIndex].id === track.id) {
            randomIndex = Math.floor(Math.random() * songsData.length);
        }
        const shuffledTrack = songsData[randomIndex];
        setTrack(shuffledTrack);
        audioRef.current.src = shuffledTrack.audioSrc;
        await audioRef.current.load();
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const seekSong = (e) => {
        audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration;
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    }, [audioRef]);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous, next,
        seekSong,
        shuffle,
        volume, adjustVolume,
        isMuted, toggleMute
    };

    return (
        <playerContext.Provider value={contextValue}>
            {props.children}
        </playerContext.Provider>
    );
};

export default PlayerContextProvider;
