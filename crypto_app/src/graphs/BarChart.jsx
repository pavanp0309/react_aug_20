import React from 'react'
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import useHistory from '../hooks/useHistory';

const BarChartgraph = ({coins}) => {
    const {uuid:coinId,name,iconUrl}=coins
    
    const {history,isLoading,isError}=useHistory(coinId)
        if(isLoading){
            return <h6>loading/.....</h6>
        }
        if(isError){
            return <h6>error.....</h6>
        }

    let data=history.map((ele)=>(
    {
     date:new Date(ele.timestamp*1000).toLocaleDateString(),
     price:ele.price
}
)).slice(0,30)
  return (
    <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
        <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      {/* <XAxis dataKey="price" scale="band" /> */}
      {/* <YAxis width="auto" /> */}
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#1b10f1ff" />
      <Bar dataKey="price" barSize={20} fill="#a03e96ff" />
      <Line type="monotone" dataKey="price" stroke="#11ff00ff" />
      <Scatter name="red" dataKey="price" fill="red" />
      <Scatter name="blue" dataKey="price" fill="blue" />
    </ComposedChart>
    </div>
  )
}

export default BarChartgraph
