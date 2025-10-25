import React from 'react'
import { useGetCryptostatsQuery } from '../store/crypto/cryptoReducers'

const useStats = () => {
    let {data,isLoading,isError}=useGetCryptostatsQuery()
    let bestCoins=data?.data?.bestCoins || []
  return {bestCoins,isLoading,isError}
}

export default useStats
