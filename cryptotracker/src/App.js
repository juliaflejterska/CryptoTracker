import { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./layout/Header";
import CryptoItemPage from "./views/CryptoItemPage";
import CryptoListPage from "./views/CryptoListPage";

import "./App.css";
import { CurrenciesContextProvider } from "./context/CurrenciesContext";

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
