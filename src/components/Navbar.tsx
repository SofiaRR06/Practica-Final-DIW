import Mail from "../assets/mail.svg";
import Search from "../assets/search.svg";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
    <nav className="fixed left-0 right-0 flex items-center justify-between bg-blue px-4 py-3 shadow-lg rounded-full z-50 mx-10 border-b-5 border-dark-blue my-4">
      {/* Icono de correo */}
      <div>
        <div className="flex">
          <a href="#">
          <button className="text-white px-10">
            <img src={Mail} alt="Correo" />
          </button>
          </a>

          {/* Menú Inicio */}
          <div className=" flex items-center ">
            <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue text-2xl ">
              INICIO
            </button>
            <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue text-2xl">
              SERVICIOS
            </button>
            <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue text-2xl">
              NOSOTROS
            </button>
          </div>
        </div>
      </div>
      {/* Buscador */}
      <div className="flex items-center ">
        <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue text-2xl">
          CONTACTO
        </button>
        <button className="flex items-center text-white font-semibold px-4 py-2 pr-10 rounded-full hover:bg-dark-blue text-2xl">
          NOTICIAS
        </button>
        <div className="border-white border-5 rounded-full">
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-full px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className=" text-black  items-center w-12 mt-1">
            <img src={Search} alt="Buscar" />
          </button>
        </div>
      </div>
      {/* Logo central (centrado y solapado) */}
      <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full p-2 z-50 flex items-center justify-center shadow-md">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
    </>
  );
};

export default Navbar;
