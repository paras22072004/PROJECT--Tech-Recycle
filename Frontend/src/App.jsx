import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Analytics from "../pages/Analytics";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
