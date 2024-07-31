import React from 'react'

<<<<<<< HEAD
const SongItem = ({ image, name, desc, id }) => {
    return (
        <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded' src={image} alt="" />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    )
=======
const SongItem = ({name,image,desc,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'> 
      <img className='rounded' src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
>>>>>>> 946fe6accdd326ba402c9f0fd7900a216f05482b
}

export default SongItem
