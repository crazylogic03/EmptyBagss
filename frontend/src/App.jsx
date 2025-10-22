import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Default route redirects to /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/trip" element={<TripPlanner />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
