<<<<<<< HEAD
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt={name} />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-sm mt-2 mb-1'>{desc}</p>
>>>>>>> 946fe6accdd326ba402c9f0fd7900a216f05482b
        </div>
    );
}

export default AlbumItem;
