import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/trip" element={<TripPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
