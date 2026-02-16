import { useState } from "react";
import { Menu, X } from "lucide-react";
import Mail from "../../assets/mail.svg";
import Search from "../../assets/search.svg";
import Logo from "../../assets/logo.svg";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navegador PC */}
      <nav className="fixed left-0 right-0 top-10 hidden lg:flex items-center justify-between bg-blue dark:bg-dark-surface px-4 py-3 shadow-lg rounded-full z-50 mx-10 border-b-4 border-dark-blue  dark:border-dark-border transition-colors">
        <div>
          <div className="flex items-center">
            <a href="#">
              <button className="text-white px-10 mt-2 hover:opacity-80 transition-opacity ">
                <img src={Mail} alt="Correo" className="w-12 h-12" />
              </button>
            </a>

            <div className="flex items-center ml-5 gap-1">
              <a href="#">
                <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue dark:hover:bg-blue text-2xl transition-colors">
                  INICIO
                </button>
              </a>
              <a href="#">
                <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue dark:hover:bg-blue text-2xl transition-colors">
                  SERVICIOS
                </button>
              </a>
              <a href="#">
                <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue dark:hover:bg-blue text-2xl transition-colors">
                  NOSOTROS
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          
          <ThemeToggle />
          
          <a href="#n">
            <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue dark:hover:bg-blue text-2xl mr-8 transition-colors">
              NOTICIAS
            </button>
          </a>
          
          <div className="relative flex items-center border-white border-4  rounded-full px-3 py-1 mr-10">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none text-white placeholder-grey  px-2 w-32"
            />
            <button className="ml-2 w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img src={Search} alt="Buscar" className="w-20 h-20" />
            </button>
          </div>
        </div>
    
        <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full p-2 z-50 flex shadow-md transition-colors">
          <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </nav>

      {/* Navegador Móvil */}
      <nav className="fixed left-0 right-0 top-4 lg:hidden z-50 mx-4">
      
        <div className="flex items-center p-2 bg-blue dark:bg-dark-surface shadow-lg rounded-3xl border-b-4 border-dark-blue dark:border-dark-border transition-colors">
          <div className="w-24 h-24 bg-white rounded-full p-1 shadow-md shrink-0 transition-colors">
            <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <div className="flex items-center justify-end gap-6 px-4 flex-1 ">
             <ThemeToggle />
            
            <a href="mailto:info@prismacreative.com">
              <button className="text-white hover:opacity-80 transition-opacity">
                <img src={Mail} alt="Correo" className="w-12 h-12" />
              </button>
            </a>

            <button
              onClick={toggleSearch}
              className={`text-white hover:bg-dark-blue bg-blue dark:hover:bg-blue p-2 rounded-full transition-colors ${
                isSearchOpen ? 'bg-dark-surface' : ''
              }`}
            >
              <img src={Search} alt="Buscar" className="w-12 h-12" />
            </button>

            <button
              onClick={toggleMenu}
              className={`text-white hover:bg-dark-blue bg-blue dark:hover:bg-blue p-2 rounded-full transition-colors ${
                isMenuOpen ? 'bg-dark-surface' : ''
              }`}
            >
              {isMenuOpen ? (
                <X className="w-12 h-12" />
              ) : (
                <Menu className="w-12 h-12" />
              )}
            </button>
          </div>
        </div>

        {/* Barra de buscar*/}
        {isSearchOpen && (
          <div className="mt-2 bg-blue dark:bg-dark-surface rounded-3xl shadow-lg border-b-4 border-dark-blue dark:border-dark-border p-4 animate-slideDown transition-colors">
            <div className="relative flex items-center border-white border-2 rounded-full px-3 py-2">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent outline-none text-white placeholder-grey px-2 w-full"
              />
              <button className="ml-2 hover:opacity-80 transition-opacity">
                <img src={Search} alt="Buscar" className="w-12 h-12" />
              </button>
            </div>
          </div>
        )}

        {/* Barra del menú */}
        {isMenuOpen && (
          <div className="mt-2 bg-blue dark:bg-dark-blue rounded-3xl shadow-lg border-b-4 border-dark-blue dark:border-black p-4 space-y-2 animate-slideDown transition-colors">
            <a href="#inicio" onClick={toggleMenu}>
              <button className="w-full text-left text-white font-semibold px-4 py-3 rounded-full hover:bg-dark-blue dark:hover:bg-blue transition-colors">
                INICIO
              </button>
            </a>
            <a href="#servicios" onClick={toggleMenu}>
              <button className="w-full text-left text-white font-semibold px-4 py-3 rounded-full hover:bg-dark-blue dark:hover:bg-blue transition-colors">
                SERVICIOS
              </button>
            </a>
            <a href="#nosotros" onClick={toggleMenu}>
              <button className="w-full text-left text-white font-semibold px-4 py-3 rounded-full hover:bg-dark-blue dark:hover:bg-blue transition-colors">
                NOSOTROS
              </button>
            </a>
            <a href="#noticias" onClick={toggleMenu}>
              <button className="w-full text-left text-white font-semibold px-4 py-3 rounded-full hover:bg-dark-blue dark:hover:bg-blue transition-colors">
                NOTICIAS
              </button>
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;