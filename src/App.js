import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Contract from "./Components/Contract/Contract";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Apointment from "./Components/Apointment/Apointment";
import FindDoctor from "./Components/FindDoctor/FindDoctor";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:index" element={<ServiceDetails />} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="/apointment" element={<Apointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
