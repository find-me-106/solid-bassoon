import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import Subscription from "./pages/Subscription";
import MoreDetails from "./pages/MoreDetails";
import MembershipPage from "./pages/MembershipPage"; // 1. Added import
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Moredetails" element={<MoreDetails />} />
        <Route path="/Subscription" element={<Subscription />} />

        {/* 2. Added Membership route for cash payment */}
        <Route path="/membership" element={<MembershipPage />} />
      </Routes>
    </>
  );
}

export default App;