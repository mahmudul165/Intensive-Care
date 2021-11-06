import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Hader from "./Components/Header/Header";
import Contract from "./Components/Contract/Contract";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <Router>
        <Hader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" Component={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Contract />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
