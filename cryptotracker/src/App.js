import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./layout/Header";
import CryptoItemPage from "./views/CryptoItemPage";
import CryptoListPage from "./views/CryptoListPage";
import { CurrenciesContextProvider } from "./context/CurrenciesContext";

import "./App.css";

const App = () => {
  return (
    <>
      <CurrenciesContextProvider>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CryptoListPage />} />
            <Route path="/details/:id" element={<CryptoItemPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </HashRouter>
      </CurrenciesContextProvider>
    </>
  );
};

export default App;
