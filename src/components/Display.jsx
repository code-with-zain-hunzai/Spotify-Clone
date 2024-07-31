import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAblum from './DisplayAblum';
import { albumsData } from '../assets/assets';

const Display = () => {
    const displayRef = useRef();
    const location = useLocation();

    const isAlbum = location.pathname.includes("album");
    const albumId = isAlbum ? location.pathname.split('/').pop() : '';
    const bgColor = albumsData[Number(albumId)]?.bgColor || '#121212';

    useEffect(() => {
        if (albumId) {
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
        } else {
            displayRef.current.style.background = `#121212`;
        }
    }, [albumId, bgColor]);

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAblum />} />
            </Routes>
        </div>
    );
}

export default Display;
