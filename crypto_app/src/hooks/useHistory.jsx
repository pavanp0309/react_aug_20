import React from 'react'
import { useGetCryptoHistoryQuery } from '../store/crypto/cryptoReducers'

const useHistory = (coinId="Qwsogvtv82FCd",timePeriod="3m") => {
    console.log("hcoind",coinId)
    const {data,isLoading,isError}=useGetCryptoHistoryQuery({coinId,timePeriod})
    // console.log("historydata",data)
    const history=data?.data?.history || []
  return {history,isLoading,isError}
}

export default useHistory
