
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Terminal, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Credentials", path: "/credentials" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md py-4 px-6 border-b",
        scrolled ? "bg-cyber-black/80 border-neon-cyan/20" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Terminal 
            className="h-7 w-7 text-neon-cyan animate-pulse-glow" 
            style={{"--glow-color": "rgba(0, 255, 255, 0.8)"} as React.CSSProperties} 
          />
          <span className="text-white font-bold text-xl tracking-wider">
            NEON<span className="text-neon-cyan">FUTURE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:text-neon-magenta group",
                location.pathname === link.path
                  ? "text-neon-cyan"
                  : "text-gray-300"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-neon-cyan transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100",
                location.pathname === link.path ? "scale-x-100" : ""
              )} />
            </Link>
          ))}
          <Link
            to="/projects"
            className="cyber-button text-sm rounded"
          >
            Enter System
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-cyber-black/90 backdrop-blur-md border-b border-neon-cyan/20 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-60 py-4" : "max-h-0 py-0 border-none"
        )}
      >
        <div className="flex flex-col items-center gap-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-wider",
                location.pathname === link.path
                  ? "text-neon-cyan"
                  : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/projects"
            className="cyber-button text-sm rounded w-full text-center mt-2"
          >
            Enter System
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
