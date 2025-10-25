import React from "react";
import useCoins from "../../hooks/useCoins";
import { Table } from "antd";
import millify from "millify";
import useHistory from "../../hooks/useHistory";
import LineChart from "../../graphs/LineChart";

const CryptoTable = () => {
  // data form api
  let { coins, isLoading } = useCoins();
  const columns = [
    {
      key: "rank",
      title: "Rank",
      dataIndex: "rank",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      align:"center",
      render: (text) => <span>{text}</span>,
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      align:"center",
      render: (text, record) => (
        <div className="d-flex align-items-center h-100 ">
          <img
            src={record.iconUrl}
            alt=""
            style={{ borderRadius: "50%" }}
            width={"30px"}
            height={"30px"}
          />
          <p className="mx-1 my-auto">{record.name}</p>
        </div>
      ),
    },
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
      align:"center",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      render: (text, record) => <p>{millify(text)}</p>,
    },
    {
      key: "24hVolume",
      title: "24hVolume",
      dataIndex: "24hVolume",
      align:"center",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      render: (text, record) => <p>{text}</p>,
    },
    {
      key: "marketCap",
      title: "MarketCap",
      dataIndex: "marketCap",
      align:"center",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      render: (text, record) => <p>{millify(text)}</p>,
    },
    {
      key: "change",
      title: "Change",
      dataIndex: "change",
      align:"center",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      render: (text, record) => (
        <p style={{ color: text < 0 ? "red" : "green" }}>{text}</p>
      ),
    },

    {
      key: "uuid",
      title: "Graph",
      dataIndex: "uuid",
      align:"center",
      responsive:["xs","sm","md","lg","xl","xxl"] ,
      render: (coinId) => <HistoricalData data={coinId} />
    }
  ];

  // historical data to print the graph
  let HistoricalData = ({ data }) => {
    // console.log("coinsid",data)
    const { history, isLoading, isError } = useHistory(data);
    if (isLoading) {
      return <span>loading...</span>;
    }
    if (isError) {
      return <span>Not found...</span>;
    }
    return <LineChart history={history} />;
  };

  return (
    <div className="container-fluid">
      <Table columns={columns} dataSource={coins} loading={isLoading} />;
    </div>
  );
};

export default CryptoTable;
