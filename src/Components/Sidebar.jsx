import { useEffect, useState } from 'react';
import { AiFillFileText } from 'react-icons/ai';
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { Link,  useLocation } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation();
    const [showModal,setShowmodal]=useState(false);
    const [phoneActive,setPhoneActive]=useState(
    window.innerWidth<1100
    )
    const resizeHandler=()=>{
      setPhoneActive(window.innerWidth<1100);
    };
    useEffect(() => {
      window.addEventListener("resize", resizeHandler);
  
      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    }, []);
    
  return (
   <>
   {phoneActive && (
    <button id='hamburger' onClick={()=>setShowmodal(true)}><HiMenuAlt4/></button>
   )}
    <aside className='w-full bg-white relative z-10 overflow-y-auto p-4' 
        style={
          phoneActive?
          {
             width:"20rem",
             height:"100vh",
             position:"fixed",
             top:0,
             left:showModal?"0":"-20rem",
             transition:"all 0.5s"
        }:{}
      }
       >
        <h2>ADMIN PANEL</h2>
          <DivOne   location={location} />
        <DivTwo location={location} phoneActive={phoneActive}   />
        {phoneActive && <button id='close-sidebar' onClick={()=>setShowmodal(false)}>Close</button>}


    </aside>
   </>
  )
}
  const DivOne = ({ location }) => (
    <div  className='m-[2rem] mx-[1rem]'>
      <h5 className='m-[1rem] mx-[0rem] opacity-[0.8] tracking-[2px] font-bold uppercase '>Dashboard</h5>
      <ul className=' flex flex-col  justify-[unset] items-[unset]  gap-[0.5rem] list-none' >
        <Li 
          url="/admin/dashboard"
          text="Dashboard"
          Icon={RiDashboardFill}
          location={location}
        />
       
       
        
      </ul>
    </div>
  );
  const DivTwo = ({ location }) => (
    <div  className='m-[2rem] mx-[1rem]'>
     <h5 className='m-[1rem] mx-[0rem] opacity-[0.8] tracking-[2px] font-bold uppercase'>Charts</h5>
     <ul className=' flex flex-col  justify-[unset] items-[unset]  gap-[0.5rem] list-none' >
        <Li
          url="/pages/barcharts"
          text="Bar"
          Icon={FaChartBar}
          location={location}
        />
        <Li
          url="/pages/piechart"
          text="Pie"
          Icon={FaChartPie}
          location={location}
        />
        <Li
          url="/pages/linechart"
          text="Line"
          Icon={FaChartLine}
          location={location}
        />
      </ul>
    </div>
  );
  
  const Li = ({ url, text, location, Icon }) => (
    <li className=' py-2 px-4 rounded-[10px] '
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "black"
          : " rgb(154, 154, 154)",
      }}
    >
      <Link className='  flex flex-row justify-center items-center gap-2 text-black'
        to={url}
        style={{
          color: location.pathname.includes(url) ? "black" : "white",
        }}
      >
        <Icon className="text-white" />
        <p className="text-white" >{text}</p>
      </Link>
    </li>
  );
  
  
export default Sidebar