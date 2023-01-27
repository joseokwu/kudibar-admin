import LineChart from "./LineChart";
import { Chart } from "chart.js/auto";
import DoughnutChart from "./DoughnutChart";

const Charts2 = ({ height }) => {
  const dataSet = {
    labels: ["Mon", "Tues"],
    datasets: [
      {
        label: "Visits",
        data: [100, 180, 230, 280, 240, 300, 320],
        // backgroundColor: ["#f9b32e"],
        fill: false,

        borderColor: ["#f9b32e"],
        tension: 0.5,
      },
    ],
  };
  return (
    <div className="rounded-md p-8 bg-white mx-5 mb-3 gap-[50px]">
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
      <DoughnutChart data={dataSet} legend={true} height={height} />
    </div>
  );
};
export default Charts2;
