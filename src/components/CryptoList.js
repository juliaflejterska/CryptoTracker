import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CurrenciesContext } from "../context/CurrenciesContext";
import { BASE_URL } from "../constans/constans";
import CryptoItem from "./CryptoItem";

import classes from "./CryptoList.module.css";

const CryptoList = () => {
  const [cryptoItems, setCryptoItems] = useState([]);
  const { storageCurrencies, deleteCurrency } = useContext(CurrenciesContext);

  useEffect(() => {
    if (
      storageCurrencies.length < 1 ||
      storageCurrencies == "" ||
      !storageCurrencies
    ) {
      setCryptoItems([]);
    } else {
      axios
        .get(`${BASE_URL}/coins/markets`, {
          params: {
            vs_currency: "pln",
            ids: storageCurrencies.join(", "),
          },
        })
        .then((response) => {
          setCryptoItems(response.data);
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
    }
  }, [storageCurrencies]);

  return (
    <div className={classes.crypto_list_container}>
      <ul className={classes.crypto_list}>
        {cryptoItems.map((item) => {
          return (
            <CryptoItem
              key={item.id}
              cryptoItem={item}
              deleteCurrency={deleteCurrency}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CryptoList;
