import React, { useState, useEffect } from 'react'
import CryptoCards from './CryptoCards';

function Home() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    const options = {
      headers: {
        'x-access-token': 'coinrankingffd88d7f1f3ded6efdd4294f69bc4947eaeea7a7afd17f66',
      },
    };
    
    fetch('https://api.coinranking.com/v2/coins', options)
      .then((response) => response.json())
      .then((result) => setCoins(result));

      console.log(coins)
    }, [])
  


  return (
    <div className='backdrop-blur-[20px] bg-[#00000033] text-white w-11/12 max-w-6xl relative flex items-center justify-center min-height flex-col my-2 rounded-md'>
        <h1 className='w-11/12 text-3xl my-2'>Today's Cryptocurrency Prices by Market Cap</h1>
        <div className='rounded-sm backdrop-blur-[20px] bg-[#ffffff33] text-left w-11/12 flex items-center justify-between'>
          <h1 className='flex-1'></h1>
          <h1 className='flex-1'>#</h1>
          <h1 className='flex-1'>Name</h1>
          <h1 className='flex-1 text-right'>Price</h1>
          <h1 className='flex-1 text-right'>24h %</h1>
          <h1 className='flex-1 text-right'>Market Cap</h1>
        </div>
        
        <div className='relative flex flex-col justify-center items-center w-11/12'>
          {
            coins.data.coins.map((coin) => (
              <CryptoCards key={coin.uuid} rank={coin.rank} name={coin.name} symbol={coin.symbol} icon={coin.iconUrl} change={coin.change} price={coin.price} cap={coin.marketCap}></CryptoCards>
            ))
          }
        </div>
    </div>
  )
}

export default Home