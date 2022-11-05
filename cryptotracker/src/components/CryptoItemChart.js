import { useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

import moment from "moment";

const CryptoItemChart = ({ cryptoItemDayPrices, cryptoItemData }) => {
  const ref = useRef();

  const data = {
    labels: cryptoItemDayPrices.map((value) => moment(value.x).format("LT")),
    datasets: [
      {
        label: `price of ${cryptoItemData.name} (PLN)`,
        data: cryptoItemDayPrices.map((value) => value.y),
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
      <Line ref={ref} data={data} options={options} />
    </div>
  );
};

export default CryptoItemChart;
