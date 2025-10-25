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
      })
    },
  
  ],
};

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

  return (
    <div>
       <Line options={options} data={data} />;
    </div>
  )
}

export default LineChart
