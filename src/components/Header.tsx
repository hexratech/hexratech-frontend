import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => setIsOpen(false);

  // Over hero (transparent): white links. Scrolled: gray links, blue on hover
  const linkClass = `font-medium transition-colors duration-200 ${
    isScrolled ? "text-gray-600 hover:text-blue-600" : "text-white/90 hover:text-white"
  }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 lg:px-20">
        {/* Logo */}
        <a
          href="#home"
          className={`text-xl font-bold transition-colors duration-200 ${
            isScrolled ? "text-blue-600" : "text-white"
          }`}
        >
          HexraTech
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#services" className={linkClass}>Services</a>
          {/* Contact as a CTA pill button */}
          <a
            href="#contact"
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200"
                : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl focus:outline-none transition-colors ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <nav className="flex flex-col space-y-4 p-6 font-medium">
            <a href="#home" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#services" onClick={handleNavClick} className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" onClick={handleNavClick} className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-full text-center font-semibold text-sm w-fit">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
