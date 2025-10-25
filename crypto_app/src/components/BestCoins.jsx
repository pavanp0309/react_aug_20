import React from 'react'
import useStats from '../hooks/useStats'
import AreaChart from '../graphs/AreaChart'
import BarChart from '../graphs/BarChart'
import BarChartgraph from '../graphs/BarChart'

const BestCoins = () => {
    const {bestCoins=[],isLoading,isError}=useStats()
    if(isLoading){
        return <h6>loading..</h6>
    }
     if(isError){
        return <h6>error..😭😢😵</h6>
    }
  return (
    <div className='container'>
        <div className="row gy-3 gx-1">
          {
            bestCoins.map((ele)=>   <AreaChart key={ele.uuid}  coins={ele}/>)
          }
        </div>

        <div className="row">
            {
                bestCoins.map((ele)=><BarChartgraph  key={ele.uuid}  coins={ele} />)
            }
        </div>
      
    </div>
  )
}

export default BestCoins
