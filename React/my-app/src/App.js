import React from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import SubHeader from "./components/subheader/SubHeader";
import Pants from "./pages/pants/Pants";
import Shirt from "./pages/shirt/Shirt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  let [type, setType] = useState("")
  return (
    <BrowserRouter>
      <Header setType={setType} />
      <SubHeader />
      <Routes>
        <Route path="/" element={<Card type={type} />} />
        <Route path="/pants" element={<Pants />} />
        <Route path="/shirt" element={<Shirt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
