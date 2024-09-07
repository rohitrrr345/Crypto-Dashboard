import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

export const BarChart = ({
  data1 = [],
  // data_2 = [],
 item,
  // title_2,
  bgColor_1,
  // bgColor_2,
  horizontal = false,
 
}) => {
  const date=[];
  const prices=[];
  
  const options = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
   labels:date,
    datasets: [
      {
        label:`price in ${item}`,
        data: prices,
        
        backgroundColor: bgColor_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      // {
      //   label: title_2,
      //   data: data_2,
      //   backgroundColor: bgColor_2,
      //   barThickness: "flex",
      //   barPercentage: 1,
      //   categoryPercentage: 0.4,
      // },
    ],
  };
  for (let i = 0; i < data1.length-500; i++) {
    if(item=="24h") date.push(new Date(data1[i][0]).toLocaleTimeString())//respnsive ===true
   else date.push(new Date(data1[i][0]).toLocaleDateString());
prices.push(data1[i][1]);
   }
   

  return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />;
};

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}) => {
  const doughnutData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

export const PieChart = ({ labels, data, backgroundColor, offset }) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={pieChartData} options={pieChartOptions} />;
};

export const LineChart = ({
  
  arr=[],days,currency
}) => {
    const prices=[];
    const date=[];
    const data={
     labels:date,
    
     datasets:[{
         label:`price in ${currency}`,
         data:prices,
         borderColor:"blue",
         backgroundColor:"yellow"
     },],
    }
    for (let i = 0; i < arr.length; i++) {
        if(days=="24h") date.push(new Date(arr[i][0]).toLocaleTimeString())//respnsive ===true
       else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
       }


  return <Line options={{
    responsive:true,
  }} data={data} />;
};
