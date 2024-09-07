import Sidebar from "../Sidebar";
import { BarChart } from "../Charts";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../../main";


const BarCharts = () => {
  const [market, setmarket] = useState([]);
  const [item, setitem] = useState("24h");
  const [error, seterror] = useState(false);
  const hour=()=>{
    setitem("24h")
  }
  const day=()=>{
    setitem("7d")
  }
   const anotherday=()=>{
    setitem("60d")
  }


  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        // const another=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        const { data } = await axios.get(
          `${server}/coins/${"bitcoin"}/market_chart?vs_currency=${"inr"}&days=${item}`
        );
        setmarket(data.prices);
        console.log(market)
      } catch (error) {
        seterror(true);
      }
    };
    fetchCoinData();
  }, [market]);
  // useEffect(() => {
  //   console.log(market);
  // }, [market]);
  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] gap-8 h-screen bg-[#f7f7f7] ">
      <Sidebar />
      <main className="chart-container bg-white p-16 overflow-y-auto">
        <h1 className="mt-0 mr-0 mb-[5rem] ml-[2rem]">Bar Charts</h1>
        <section className="w-[80%] my-[4rem] mx-auto">
          <BarChart
            data1={market}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            item={item}
          />
          <h2 className="my-[2rem] mx-0 text-center tracking-[2px] font-light uppercase">Top Selling Products & Top Customers</h2>
        </section>
        <section className="w-[80%] my-[4rem] mx-auto">
          <BarChart
            horizontal={true}
            data1={market}
          
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2=""
           item={item}
          />
          <h2 className="mt-4">Filter Data</h2>
          <div className="flex justify-center items-center flex-row gap-2 mt-8">
       <button className=" bg-black  rounded-md p-2 text-white" onClick={hour} >24days</button>
       <button className=" bg-black rounded-md p-2 text-white"onClick={day} >7days</button>
       <button className=" bg-black rounded-md p-2 text-white"onClick={anotherday} >60days</button>

       </div>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
