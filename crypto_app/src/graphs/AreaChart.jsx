import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import useHistory from '../hooks/useHistory';

const AreaChartGraph = ({coins}) => {
   
    const {uuid:coinI,name,iconUrl}=coins

    const {history,isLoading,isError}=useHistory(coinI)
    if(isLoading){
        return <h6>loading/.....</h6>
    }
    if(isError){
        return <h6>error.....</h6>
    }
// let data={
//     date:history.map((ele)=>new Date(ele.timestamp*1000).toLocaleTimeString()),
//     price:history.map(ele=>ele.price)
// }
let data=history.map((ele)=>(
    {
     date:new Date(ele.timestamp*1000).toLocaleDateString(),
     price:ele.price
}
))

  return (
   <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="card ">
        {/* card_header start */}
        <div className='d-flex align-items-center border-bottom p-2'>
            <img src={iconUrl} alt="" width={"50px"} height={"50px"} style={{borderRadius:"50%"}} />
            <p className='fw-bold fs-5 my-auto'>{name}</p>
        </div>
        {/* card_header end */}
        {/* card_body start */}
          <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="price" /> */}
      {/* <YAxis width="auto" /> */}
      {/* <Tooltip /> */}
      <Area type="monotone" dataKey="price" stroke="#f83909ff" fill="#8884d8" />
    </AreaChart>
    </div>
   </div>
  )
}

export default AreaChartGraph
