import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Jewells from "./components/Jewels";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./components/Shop";

// Wrapper to handle conditional navbar
const AppContent = () => {
  const location = useLocation();

  // Hide Navbar on /login
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/shop";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Login page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />


        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Jewells />
              <About />
              <Mission />
              <Expertise />
              <ContactSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200">
      <Router>
        <AppContent />
      </Router>
    </main>
  );
};

export default App;
