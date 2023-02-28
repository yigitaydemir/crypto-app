import React from 'react'

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCoins/coinsPerPage); i++) {
        pageNumbers.push(i)
    }

    const left = "<"
    const right = ">"

  return (
    <nav className='my-2 rounded-md w-11/12 w-full relative flex justify-center items-center backdrop-blur-[20px] bg-[#ffffff33]'>
        <ul className='flex'>
            <li className='m-2 p-2 text-lg'><a href='#'>{left}</a></li>
            {pageNumbers.map(number => (
                <li key={number} className="flex justify-center items-center">
                    <a className='m-2 p-2 rounded-lg backdrop-blur-[20px] bg-[#00000033]' onClick={() => paginate(number)} href='#'>{number}</a>
                </li>
            ))}
            <li className='m-2 p-2' text-lg><a href='#'>{right}</a></li>
        </ul>
    </nav>
  )
}

export default Pagination