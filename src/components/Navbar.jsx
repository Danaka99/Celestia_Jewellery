import { useState } from "react";
import logo from "../assets/logo.jpg";
import { LINKS } from "../constants";
import { FaTimes, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg:m-2 lg:w-[60rem] lg:rounded-full lg:shadow-lg">
        {/* Logo */}
        <img src={logo} alt="logo" width={80} height={22} />

        {/* Desktop Links */}
        <div className="hidden space-x-6 lg:flex items-center">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className={`text-sm ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover:opacity-50`}
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}

          {/* ✅ Shop Button */}
          <button
            onClick={() => navigate("/shop")}
            className="ml-6 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Shop
          </button>

          {/* ✅ Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="ml-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-full backdrop-blur-lg bg-white/30 lg:hidden">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-tighter text-white hover:bg-white/50 hover:text-black"
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              {link.text}
            </a>
          ))}

          {/* ✅ Mobile Shop Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/shop");
            }}
            className="m-4 w-[90%] rounded-lg bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Shop
          </button>

          {/* ✅ Mobile Login Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate("/login");
            }}
            className="m-4 w-[90%] rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
