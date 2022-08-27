import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Config from "./pages/Config";
import Sort from "./pages/Config/Sort";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/sorteio" element={<Sort />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
