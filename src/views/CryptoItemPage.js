import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CryptoItemChart from "../components/CryptoItemChart";
import { BASE_URL } from "../constans/constans";

const CryptoItemPage = () => {
  const { id } = useParams();
  const [cryptoItemDayPrices, setCryptoItemDayPrices] = useState([]);
  const [cryptoItemData, setCryptoItemData] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/coins/${id}/market_chart`, {
        params: {
          vs_currency: "pln",
          days: "1",
        },
      })
      .then((response) => {
        setCryptoItemDayPrices(
          response.data.prices.map((value) => ({
            x: value[0],
            y: value[1].toFixed(2),
          }))
        );
      })
      .catch((error) => {
        if (error.response) {
          console.log("An error occurred:", error.response.status);
        } else if (error.request) {
          console.log("An error occurred:", error.request);
        } else {
          console.log("An error occurred:", error.message);
        }
      });

    axios
      .get(`${BASE_URL}/coins/markets`, {
        params: {
          vs_currency: "pln",
          ids: id,
        },
      })
      .then((response) => {
        setCryptoItemData(response.data[0]);
      })
      .catch((error) => {
        if (error.response) {
          console.log("An error occurred:", error.response.status);
        } else if (error.request) {
          console.log("An error occurred:", error.request);
        } else {
          console.log("An error occurred:", error.message);
        }
      });
  }, []);

  return (
    <>
      <div className="crypto_item_page_data_container">
        <h1>{cryptoItemData.name}</h1>
        <h2>{cryptoItemData.current_price} PLN</h2>
      </div>
      <CryptoItemChart
        cryptoItemDayPrices={cryptoItemDayPrices}
        cryptoItemData={cryptoItemData}
      />
    </>
  );
};

export default CryptoItemPage;
