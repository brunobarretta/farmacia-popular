import { useState } from "react";
import { NavLink } from "react-router-dom";
import * as Styled from "./styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Styled.Header>
        <Styled.Container>
          <Styled.MenuButton onClick={() => setIsOpen(!isOpen)}>
            ☰
          </Styled.MenuButton>

          <Styled.Title>
            <NavLink to="/">Busca Farmácia Popular</NavLink>
          </Styled.Title>

          <Styled.Nav>
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
          </Styled.Nav>
        </Styled.Container>
      </Styled.Header>

      {isOpen && (
        <Styled.MobileMenu>
          <Styled.Overlay onClick={() => setIsOpen(false)} />
          <Styled.MobileNav>
            <Styled.CloseButton onClick={() => setIsOpen(false)}>
              Fechar
            </Styled.CloseButton>
            <Styled.NavMobile>
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
            </Styled.NavMobile>
          </Styled.MobileNav>
        </Styled.MobileMenu>
      )}
    </>
  );
};

export default Navbar;
