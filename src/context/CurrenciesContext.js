import { useState, createContext, useEffect } from "react";
import { DUMMY_CURRENCIES } from "../constans/constans";

export const CurrenciesContext = createContext();

export const CurrenciesContextProvider = (props) => {
  const [storageCurrencies, setStorageCurrencies] = useState(
    localStorage.getItem("storageCurrencies")?.split(",") || DUMMY_CURRENCIES
  );

  useEffect(() => {
    localStorage.setItem("storageCurrencies", storageCurrencies);
    if (localStorage.getItem("storageCurrencies") == "") {
      localStorage.removeItem("storageCurrencies");
    }
  }, [storageCurrencies]);

  const chooseCurrency = (currency) => {
    if (storageCurrencies.indexOf(currency) === -1) {
      setStorageCurrencies([...storageCurrencies, currency]);
    }
  };

  const deleteCurrency = (currency) => {
    setStorageCurrencies(
      storageCurrencies.filter((storageCurrency) => {
        return storageCurrency !== currency;
      })
    );
  };

  return (
    <CurrenciesContext.Provider
      value={{ storageCurrencies, chooseCurrency, deleteCurrency }}
    >
      {props.children}
    </CurrenciesContext.Provider>
  );
};
