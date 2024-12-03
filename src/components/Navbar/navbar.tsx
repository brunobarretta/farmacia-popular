import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-800 md:sticky top-0 z-20">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center left">
          <button
            className="text-white md:hidden mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          <div className="title-font font-medium text-white">
            <NavLink to="/" className="ml-3 text-xl">
              Busca Farmácia Popular
            </NavLink>
          </div>

          <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-white">
              Mapa
            </NavLink>

            <NavLink to="/medicamentos" className="mr-5 hover:text-white">
              Lista Medicamentos
            </NavLink>

            <NavLink to="/dashboard" className="mr-5 hover:text-white">
              Estatísticas
            </NavLink>
            <NavLink to="/about" className="mr-5 hover:text-white">
              Sobre
            </NavLink>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 flex z-30">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-gray-800 w-64 h-full p-5">
            <button
              className="text-white mb-4"
              onClick={() => setIsOpen(false)}
            >
              Fechar
            </button>
            <nav className="flex flex-col">
              <NavLink to="/" className="mb-5 hover:text-white">
                Mapa
              </NavLink>
              <NavLink to="/dashboard" className="mb-5 hover:text-white">
                Dashboard
              </NavLink>
              <NavLink to="/medicamentos" className="mb-5 hover:text-white">
                Lista Medicamentos
              </NavLink>
              <NavLink to="/about" className="mb-5 hover:text-white">
                Sobre
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
