import Mail from "../assets/mail.svg";
import Search from "../assets/search.svg";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="fixed left-0 right-0 top-10 flex items-center justify-between bg-blue px-4 py-3 shadow-lg rounded-full z-50 mx-10 border-b-5 border-dark-blue ">
        <div>
          <div className="flex">
            <a href="#">
              <button className="text-white px-10">
                <img src={Mail} alt="Correo" />
              </button>
            </a>

            <div className=" flex items-center ml-5">
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

        <div className="flex items-center ">
          <button className="flex items-center text-white font-semibold px-4 py-2 rounded-full hover:bg-dark-blue text-2xl mr-20">
            NOTICIAS
          </button>
          <div className="relative flex items-center border-white border-4 rounded-full px-3 py-1 mr-10">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent outline-none text-white px-2"
            />
            <button className="ml-2 w-12 h-12 flex items-center justify-center">
              <img src={Search} alt="Buscar" />
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full p-2 z-50 flex shadow-md">
          <img src={Logo} alt="Logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
