import React from "react";
import Login from "./components/Login/login";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Cards from "./components/Cards/cards";
import SpecialMenu from "./components/SpecialMenu/specialMenu";
import Reviews from "./components/Reviews/reviews";

function App() {
  return (
    <div>
      <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/specialmenu" element={<SpecialMenu />} />
            <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Login />
    </div>
  );
}


export default App;
