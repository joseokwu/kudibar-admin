import LineChart from "./LineChart";
import { Chart } from "chart.js/auto";

const Charts = () => {
  const dataSet = {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",
        data: [400, 300, 100, 0],
        // backgroundColor: ["#f9b32e"],
        borderColor: ["#f9b32e"],
        tension: 0.5,
      },
    ],
  };
  return (
    <div className="rounded-md p-8 bg-white mx-5 mb-3 w-full gap-[50px]">
      <div className="flex items-center justify-between">
        <p>
          {" "}
          <span className="text-[#12152899]">Total Visit</span> - 300
        </p>
        <select className="text-[#12152899] font-[14px] p-[0.4rem] border-[1px] rounded border-[#1215281A]">
          <option value="" className="p-2">
            Most users
          </option>
          <option value="Most Recent"> Weekly</option>
          <option value="Most Recent">6 Month</option>
          <option value="Most Recent">Yearly</option>
        </select>
      </div>
      {/* <Line data={dataSet} /> */}
      <LineChart data={dataSet} legend={true} />
    </div>
  );
};
export default Charts;
