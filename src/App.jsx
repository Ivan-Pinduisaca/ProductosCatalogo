import './index.css';
import { Routes, Route } from "react-router-dom";

import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css'                                   //primeflex
import { Login } from './components/Login';
import { Home } from './components/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
