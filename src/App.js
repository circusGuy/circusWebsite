import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import Header from './Components/Header';
import Home from "./Pages/Home"
import Checkout from "./Pages/Checkout";
import Photos from "./Pages/Photos";
import Schedule from "./Pages/Schedule";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/photos" element={<Photos/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}

export default App;