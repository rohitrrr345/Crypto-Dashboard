import { useEffect, useState } from "react";
import { LineChart } from "../Charts";
import Sidebar from "../Sidebar";
import axios from "axios";
import { server } from "../../main";

let another
const BarCharts = () => {
 const[cnt,setcnt]=useState([]);
 const[item,setitem]=useState("24h")
  const[error,seterror]=useState(Boolean);
  const btns=["24h","7d","14d","30d","60d","200d","1y","max"];
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
     
    const fetchCoin = async() => {
      
      try { 
        // const another=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
         another=await axios.get(`${server}/coins/${"bitcoin"}/market_chart?vs_currency=${"inr"}&days=${item}`);
       setcnt(another.data.prices)
       console.log(cnt)
        
        
        
      } catch (error) { 
        seterror(true);
       
      }
    };
    fetchCoin();
  }, [item]);
  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] gap-8 h-screen bg-[#f7f7f7]">
      <Sidebar />
      <main className="chart-container  bg-white p-16 overflow-y-auto">
        <h1 className="mt-0 mr-0 mb-[5rem] ml-[2rem]">Line Charts</h1>
        <section className="w-[80%] my-[4rem] mx-auto">
          <LineChart
            arr={cnt}
           days={item}
            currency={"inr"}
          />
          <h2 className="my-[2rem] mx-0 text-center tracking-[2px] font-light uppercase">Bitcoin price</h2>
        </section>

       <div className="flex justify-center items-center flex-row gap-2">
       <button className=" bg-black  rounded-md p-2 text-white" onClick={hour} >24days</button>
       <button className=" bg-black rounded-md p-2 text-white"onClick={day} >7days</button>
       <button className=" bg-black rounded-md p-2 text-white"onClick={anotherday} >60days</button>

       </div>

       
      </main>
    </div>
  );
};
export default BarCharts;
