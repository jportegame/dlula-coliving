import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../../config/siteConfig";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import LogoDesktop from "/dlula-logo.png";
import LogoMobile from "/dlula-logo.png";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setisMenuOpen(!isMenuOpen);
  const closeMenu = () => setisMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierre con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-black/60" : "bg-black/10"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-6">
        {/* Hamburguesa - siempre visible */}
        <button
          className="text-white text-4xl cursor-pointer transition-all duration-300 ease-out hover:scale-110 active:scale-95"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`inline-flex transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </span>
        </button>

        {/* Logo centrado */}
        <NavLink to="/" className="flex-1 flex justify-center">
          {/* Logo desktop */}
          <img src={LogoDesktop} alt="Logo" className="hidden lg:block h-12" />
          {/* Logo mobile */}
          <img src={LogoMobile} alt="Logo" className="block lg:hidden h-6" />
        </NavLink>

        {/* Botón de reserva a la derecha */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col font-secondary text-xs font-semibold uppercase tracking-[0.4em]"
        >
          <span className="mb-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
          <span className="text-white">{siteConfig.common.navbar.bookButton}</span>
          <span className="mt-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
        </a>
      </nav>

      {/* Backdrop - Oscuro con blur */}
      {isMenuOpen && (
        <div
          className="fixed h-screen w-full inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-100"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar elegante desde la izquierda */}
      <div
        className={`fixed left-0 top-0 h-screen w-96 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-out border-r border-white/10 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Contenedor del sidebar con padding y espaciado */}
        <div className="flex flex-col h-full">
          {/* Header del sidebar - Close button */}
          <div className="flex justify-end p-6 border-b border-white/10">
            <button
              onClick={closeMenu}
              className="text-white text-3xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Close menu"
            >
              <HiOutlineX />
            </button>
          </div>

          {/* Navegación - scrollable si es necesario */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg transition-all duration-300 font-medium text-base tracking-[0.4em] ${
                        isActive
                          ? "bg-primary/20 text-primary border-l-2 border-primary"
                          : "text-white/70 border-l-2 border-transparent hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer del sidebar - CTA */}
          <div className="border-t border-white/10 p-6 space-y-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex flex-col font-secondary text-xs font-semibold uppercase tracking-[0.4em]"
            >
              <span className="mb-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
              <span className="text-white">{siteConfig.common.navbar.bookButton}</span>
              <span className="mt-3 h-px w-full bg-primary transition-all duration-300 group-hover:w-3/4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
