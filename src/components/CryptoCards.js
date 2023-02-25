import React from 'react'

const CryptoCards = (props) => {
  return (
    <div className='relative w-full backdrop-blur-[20px] bg-[#ffffff33] m-5 p-0.5 h-16 flex items-center justify-between'>
        <div className='flex'>
            <img src={props.icon} className="w-7"></img>
            <h1 className='m-0.5 p-0.5'>{props.name}</h1>
        </div>
        <p className='text-left bg-black'>{props.price}</p>
        <p className='text-left'>{props.change}</p>
        <p className='text-left'>{props.cap}</p>
    </div>
  )
}

export default CryptoCards