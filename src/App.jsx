import "./index.css";
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/bootstrap4-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //primeflex
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Products } from "./components/Products";
import { useState } from "react";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home isLogin={isLogin} />} />
      <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
      <Route path="/:seccion" element={<Products isLogin={isLogin} />} />
    </Routes>
  );
}

export default App;
