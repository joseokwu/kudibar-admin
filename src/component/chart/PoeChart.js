import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const PieChart = ({ legend }) => {
  const labels = ["#328BE0", "#39BD78"];

  const dataSet = {
    labels: ["Desktop", "Mobile"],
    datasets: [
      {
        labels: "",
        data: [80, 14],
        backgroundColor: labels,
        borderColor: labels,
        hoverOffset: 4,
        borderWidth: 1,
        fill: true,
        borderJoinStyle: 10,
        spacing: 5,
      },
    ],
  };
  return (
    <div>
      <Pie
        options={{
          responsive: true,
          plugins: {
            title: {
              display: false,
              text: ["80%", "14%"],
              position: "right",
            },
            legend: {
              display: true,
              position: "right",
              labels: {
                color: "#121529",
              },
            },
          },
          maintainAspectRatio: true,
        }}
        // height={200}
        // width={300}
        data={dataSet}
      />
    </div>
  );
};
export default PieChart;
