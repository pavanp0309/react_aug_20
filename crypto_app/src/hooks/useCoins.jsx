import React from 'react'
import { useGetCryptocoinsQuery } from '../store/crypto/cryptoReducers'

const useCoins = () => {
    let {data,isLoading,isError}=useGetCryptocoinsQuery()
    if(isLoading){
        return <h5>Loading...</h5>
    }
     if(isError){
        return <h5>404 Error</h5>
    }

    let coins=data?.data?.coins  || []
    let stats=data?.data?.stats  || {}
    console.log("customhook",coins)

  return {coins ,stats,isLoading,isError}
}

export default useCoins
