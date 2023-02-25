import React, { useState, useEffect } from 'react'
import CryptoCards from './CryptoCards';

function Main() {
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

      console.log(coins.data.coins[0])
    }, [])
  


  return (
    <div className='backdrop-blur-[20px] bg-[#00000033] text-white w-11/12 max-w-6xl relative flex items-center justify-center min-height flex-col my-2 rounded-md'>
        <h1>CryptoCurrencies</h1>
        <div className='bg-black text-left w-11/12 flex items-center justify-between'>
          <h1>Cryptocurrency</h1>
          <h1>Price</h1>
          <h1>24h Change</h1>
          <h1>Market Cap</h1>
        </div>
        
        <div className='bg-gray-600 relative flex flex-col justify-center items-center w-11/12'>
          {
            coins.data.coins.map((coin) => (
              <CryptoCards key={coin.uuid} name={coin.symbol} icon={coin.iconUrl} change={coin.change} price={coin.price} cap={coin.marketCap}></CryptoCards>
            ))
          }
        </div>
    </div>
  )
}

export default Main