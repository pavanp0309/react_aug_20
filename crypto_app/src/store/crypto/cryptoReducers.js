import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



let baseUrl=import.meta.env.VITE_RAPID_API_URL
console.log(baseUrl)

const cryptoheaders= {
		'x-rapidapi-key':import.meta.env.VITE_RAPID_API_KEY ,
		'x-rapidapi-host': import.meta.env.VITE_RAPID_API_HOST
	}

let cryptoRequest=(url)=>({url,headers:cryptoheaders})
// https://coinranking1.p.rapidapi.com/coins
// https://coinranking1.p.rapidapi.com/coin

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),// https://coinranking1.p.rapidapi.com/
  endpoints: (build) => ({
    getCryptocoins: build.query({
      query: () =>cryptoRequest("coins") ,
    }),
   getCryptocoin: build.query({
      query: (coinId) => `coin/${coinId}`,
    }),
    getCryptoHistory: build.query({
      query: ({coinId,timePeriod}) => `coin/${coinId}/history?&timePeriod=${timePeriod}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptocoinsQuery,useGetCryptocoinQuery,useGetCryptoHistoryQuery } = cryptoApi