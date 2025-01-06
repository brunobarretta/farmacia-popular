import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Elements from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Elements.Header>
        <Elements.Container>
          <Elements.MenuButton onClick={() => setIsOpen(!isOpen)}>
            ☰
          </Elements.MenuButton>

          <Elements.Title>
            <NavLink to="/">Busca Farmácia Popular</NavLink>
          </Elements.Title>

          <Elements.Nav>
            <NavLink to="/" className="nav-item">
              Mapa
            </NavLink>
            <NavLink to="/medicamentos" className="nav-item">
              Lista Medicamentos
            </NavLink>
            <NavLink to="/dashboard" className="nav-item">
              Estatísticas
            </NavLink>
            <NavLink to="/about" className="nav-item">
              Sobre
            </NavLink>
          </Elements.Nav>
        </Elements.Container>
      </Elements.Header>

      {isOpen && (
        <Elements.MobileMenu>
          <Elements.Overlay onClick={() => setIsOpen(false)} />
          <Elements.MobileNav>
            <Elements.CloseButton onClick={() => setIsOpen(false)}>
              Fechar
            </Elements.CloseButton>
            <Elements.NavMobile>
              <NavLink to="/" className="mobile-item">
                Mapa
              </NavLink>
              <NavLink to="/dashboard" className="mobile-item">
                Dashboard
              </NavLink>
              <NavLink to="/medicamentos" className="mobile-item">
                Lista Medicamentos
              </NavLink>
              <NavLink to="/about" className="mobile-item">
                Sobre
              </NavLink>
            </Elements.NavMobile>
          </Elements.MobileNav>
        </Elements.MobileMenu>
      )}
    </>
  );
};

export default Navbar;
