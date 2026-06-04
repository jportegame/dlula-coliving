import { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../../config/siteConfig";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import LogoDesktop from "../../../assets/logo.png";
import LogoMobile from "../../../assets/logo-mobile.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo a la izquierda */}
        <NavLink to="/">
           {/* Logo desktop */}
          <img src={LogoDesktop} alt="Logo" className="hidden lg:block h-10" />
          {/* Logo mobile */}
          <img src={LogoMobile} alt="Logo" className="block lg:hidden h-10" />
        </NavLink>

        {/* Enlaces + botón + hamburguesa */}
        <div className="flex items-center gap-4">
          {/* Navegación desktop */}
          <ul className="hidden md:flex gap-6 text-white text-md items-center mr-4">
            {siteConfig.navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-200 pb-1 border-b-2 ${
                      isActive
                        ? "text-white border-white"
                        : "text-white/70 border-transparent hover:text-white hover:border-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Botón de reserva */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-sm font-medium px-4 py-2 rounded hover:opacity-90 transition"
          >
            {siteConfig.common.navbar.bookButton}
          </a>

          {/* Hamburguesa solo visible en móvil */}
          <button
            className="md:hidden text-white text-2xl ml-2 cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/40 backdrop-blur-sm px-6 py-4 origin-top animate-slide-down">
          <ul className="flex flex-col gap-4 text-white text-md">
            {siteConfig.navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block transition duration-200 pb-1 border-b-2 ${
                      isActive
                        ? "text-white border-white"
                        : "text-white/70 border-transparent hover:text-white hover:border-white"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
