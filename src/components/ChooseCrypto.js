import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constans/constans";
import { CurrenciesContext } from "../context/CurrenciesContext";

import classes from "./ChooseCrypto.module.css";

const ChooseCrypto = () => {
  const { chooseCurrency } = useContext(CurrenciesContext);
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const { storageCurrencies } = useContext(CurrenciesContext);
  const [toMuchCurrencies, setTooMuchCurrencies] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/coins/markets`, {
        params: {
          vs_currency: "pln",
          per_page: "100",
          page: "1",
        },
      })
      .then((response) => {
        setAvailableCurrencies(response.data);
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

  const onShowCurrencies = () => {
    setButtonIsClicked(!buttonIsClicked);
  };

  const onCurrencyChoose = (currency) => {
    if (storageCurrencies.length < 5) {
      chooseCurrency(currency);
      setTooMuchCurrencies(false);
    } else {
      setTooMuchCurrencies(true);
    }
  };

  return (
    <div className={classes.choose_crypto_container}>
      <button
        className={`${classes.choose_crypto_button} ${classes.show_currencies_button}`}
        onClick={onShowCurrencies}
      >
        AVAILABLE CURRENCIES
      </button>
      {buttonIsClicked && (
        <>
          {toMuchCurrencies && (
            <div className={classes.choose_crypto_alert}>
              <img width={50} src="../../img/crypto_tracker_alert.svg" />
              <span>
                You cannot choose more than 5 cryptocurrencies at the same time.
                Delete unnecessary items and try again.
              </span>
            </div>
          )}
          <span className={classes.choose_crypto_info}>Choose up to 5.</span>
          <ul className={classes.choose_crypto_list}>
            {availableCurrencies.map((availableCurrency) => {
              return (
                <li key={availableCurrency.id}>
                  <button
                    className={classes.choose_crypto_button}
                    onClick={() => onCurrencyChoose(availableCurrency.id)}
                  >
                    {availableCurrency.id.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </ul>
          <a onClick={onShowCurrencies}>
            <img width={50} src="../../img/crypto_tracker_up.svg" />
          </a>
        </>
      )}
    </div>
  );
};

export default ChooseCrypto;
