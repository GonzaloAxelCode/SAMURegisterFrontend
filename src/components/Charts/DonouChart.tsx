import ReactApexChart from "react-apexcharts";

const DonouChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options: any = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default DonouChart;
