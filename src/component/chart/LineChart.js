import { Line } from "react-chartjs-2";
const LineChart = ({ data, legend }) => {
  return (
    <div>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: legend,
              labels: {
                color: "rgb(255, 99, 132)",
              },
            },
          },
          maintainAspectRatio: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
            },
            // yAxes: [
            //   {
            //     ticks: {
            //       beginAtZero: true,
            //     },
            //   },
            // ],
          },
        }}
        // height={200}
        width={300}
        data={data}
      />
    </div>
  );
};
export default LineChart;
