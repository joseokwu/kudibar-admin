import { Line } from "react-chartjs-2";
const LineChart = ({ data, legend, height }) => {
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
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
        height={height}
        width={300}
        data={data}
      />
    </div>
  );
};
export default LineChart;
