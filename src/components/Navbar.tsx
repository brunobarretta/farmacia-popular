import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <header className="bg-gray-800 md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <NavLink to="/"  className="ml-3 text-xl">
              Farmácia Popular Database
          </NavLink>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <NavLink to="/dashboard" className="mr-5 hover:text-white">
              texto
          </NavLink>
        
          <a href="#projects" className="mr-5 hover:text-white">
            texto
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            texto
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            texto
        </a>
      </div>
    </header>
  )
}

export default Navbar