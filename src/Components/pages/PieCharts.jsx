import { DoughnutChart, PieChart } from "../Charts";
import Sidebar from "../Sidebar";
import {categories} from './../../assets/data.json'
const PieCharts = () => {
  return (
    <div className="admin-container grid grid-cols-[1fr_4fr] gap-8 h-screen bg-[#f7f7f7]">
      <Sidebar />
      <main className="chart-container  bg-white p-16 overflow-y-auto">
        <h1 className="mt-0 mr-0 mb-[5rem] ml-[2rem]">Pie & Doughnut Charts</h1>
        <section className="w-[80%] my-[4rem] mx-auto">
          <div className="max-w-[25rem] mx-auto mt-[6rem] mb-[-1rem]">
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%, 80%)`,
                `hsl(110,80%, 50%)`,
                `hsl(110,40%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>TRANSACTIONS</h2>
        </section>

        <section  className="w-[80%] my-[4rem] mx-auto">
          <div className="max-w-[25rem] mx-auto mt-[6rem] mb-[-1rem]">
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%, 50%)`
              )}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2> CATEGORIES </h2>
        </section>

        <section  className="w-[80%] my-[4rem] mx-auto">
          <div className="max-w-[25rem] mx-auto mt-[6rem] mb-[-1rem]">
            <DoughnutChart
              labels={["DONE", "FAIL"]}
              data={[40, 20,34,57,789,57,4634,]}
              backgroundColor={["hsl(269,80%,40%)", "rgb(53, 162, 255)"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2> AVAILABILITY</h2>
        </section>
        <section  className="w-[80%] my-[4rem] mx-auto">
          <div className="max-w-[25rem] mx-auto mt-[6rem] mb-[-1rem]">
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25,34,56]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Coins and Much more...</h2>
        </section>

      
       
      </main>
    </div>
  );
};

export default PieCharts;
