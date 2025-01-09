import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Photos from "./Pages/Photos";
import Schedule from "./Pages/Schedule";
import Footer from "./Components/Footer";
import Concessions from "./Pages/Concessions";
import Faq from "./Pages/Faq";

export default function App() {
  return (
    <Router>
      <div class="padder">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/concessions" element={<Concessions />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
