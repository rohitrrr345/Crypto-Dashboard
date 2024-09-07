import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom"
import {  Suspense,lazy } from "react";
const Dashboard = lazy(() => import("./Components/pages/Dashboard"));

const BarCharts = lazy(() => import("./Components/pages/Barcharts"));
const LineCharts = lazy(() => import("./Components/pages/LineCharts"));
const PieCharts = lazy(() => import("./Components/pages/PieCharts"));
import Loader from "./Components/Loader";
const App = () => {
  return (
    <Router>
    <Suspense fallback={<Loader/>}>
    <Routes>
    <Route path="/" element={<Link  to="/admin/dashboard" ><button className="bg-black text-white mt-3">Visit Dashboard</button></Link>}/>

<Route path="/admin/dashboard" element={<Dashboard/>}/>
<Route path="/pages/barcharts" element={<BarCharts/>}/>
<Route path="/pages/linechart" element={<LineCharts/>}/>
<Route path="/pages/piechart" element={<PieCharts/>}/>



</Routes>
    </Suspense>

    </Router>

  )
}

export default App