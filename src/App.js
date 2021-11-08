import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import AuthProvider from "./Components/Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/*" element={<Services />} />
            <Route
              path="/services/:index"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/find-doctor"
              element={
                <PrivateRoute>
                  <FindDoctor />
                </PrivateRoute>
              }
            />
            <Route
              path="/apointment"
              element={
                <PrivateRoute>
                  <Apointment />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
