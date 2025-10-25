import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const LineChart = ({history}) => {
    console.log(history)

const data = {
  labels:history.map((ele)=>new Date(ele.timestamp*1000).toLocaleTimeString()),
  datasets: [
    {
      label: 'Price',
      data: history.map((ele) => parseFloat(ele.price)),
      borderColor: history.map((ele) => {
        let price=parseFloat(ele.price)
        if(price<6.5)return "red"
        if(price>6.5)return "green"
        return "orange"
      }),
      backgroundColor:history.map((ele) => {
        let price=parseFloat(ele.price)
        if(price<6.5)return "red"
        if(price>6.5)return "green"
        return "blue"
      }),
      fill:false,
      borderRadius:2,
      pointRadius:0,
      lineTension:1
    },
  
  ],
}

 const options = {
  responsive: true,
  plugins: {
    legend: false,
  },
   scales:{
        x:{
            display:false
        },
        y:{
           display:false
        }
    }
};

  return (
    <div className='' style={{width:"100%",height:"50px"}}>
       <Line options={options} data={data} />
    </div>
  )
}

export default LineChart
