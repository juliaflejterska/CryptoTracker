import { useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import moment from "moment";

const CryptoItemChart = ({ cryptoItemDayPrices, cryptoItemData }) => {
  const cryptoItemChartRef = useRef();

  const data = {
    labels: cryptoItemDayPrices.map((cryptoItemDayPrice) =>
      moment(cryptoItemDayPrice.x).format("LT")
    ),
    datasets: [
      {
        label: `price of ${cryptoItemData.name} (PLN)`,
        data: cryptoItemDayPrices.map(
          (cryptoItemDayPrice) => cryptoItemDayPrice.y
        ),
        fill: true,
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <div>
      <Line ref={cryptoItemChartRef} data={data} options={options} />
    </div>
  );
};

export default CryptoItemChart;
