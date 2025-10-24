import React from 'react'
import useCoins from '../../hooks/useCoins'
import { Table } from "antd";
import millify from 'millify';

const CryptoTable = () => {
    // data form api 
    let {coins,isLoading}=useCoins()
    const columns =[
        {
            key:"rank",
            title: 'Rank',
            dataIndex: 'rank',
            render:(text ) => <span>{text}</span>,
        },
        {
            key:"name",
            title: 'Name',
            dataIndex: 'name',
            render:(text,record ) => <div className='d-flex align-items-center h-100 '>
                <img src={record.iconUrl} alt=""style={{borderRadius:"50%"}} width={"30px"} height={"30px"} />
                <p className='mx-1 my-auto'>{record.name}</p>
            </div>,
        },
             {
            key:"price",
            title: 'Price',
            dataIndex: 'price',
            render:(text,record ) => <p>{millify(text)}</p>
            },
         {
            key:"24hVolume",
            title: '24hVolume',
            dataIndex: '24hVolume',
            render:(text,record ) => <p>{text}</p>
          
        },
          {
            key:"marketCap",
            title: 'MarketCap',
            dataIndex: 'marketCap',
         render:(text,record ) => <p>{millify(text)}</p>
        },
   {
            key:"change",
            title: 'Change',
            dataIndex: 'change',
            render:(text,record ) => <p style={{color:(text<0?"red":"green")}}>{text}</p>
        },
    ]

  return (
    <div className='container'>
      <Table columns={columns} dataSource={coins} loading={isLoading} />;
    </div>
  )
}

export default CryptoTable
