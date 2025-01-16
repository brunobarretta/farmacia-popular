import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MenuButton = styled.button`
  color: white;
  display: block;
  margin-right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  padding-right: 20px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    border-left: 1px solid white;
    
    .nav-item {
      margin-right: 10px;
      color: #ffffff;
      text-decoration: none;
      padding: 5px 10px;

      &:hover {
        color: #ffffffcc;
      }
    }

    .nav-item.active,
    .mobile-item.active {
      background-color: ${({ theme }) => theme.colors.lightPurple};
      border-radius: 5px;
      padding: 5px 10px;
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1; 
`;

export const MobileNav = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 256px;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column; 
  z-index: 2; 

  .mobile-item {
    margin-bottom: 20px;
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #ffffffcc;
    }
  }

  .nav-item.active,
  .mobile-item.active {
    background-color: ${({ theme }) => theme.colors.lightPurple};
    padding: 5px 10px;
    width: fit-content;
    border-radius: 5px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  align-self: flex-start;
`;

export const NavMobile = styled.nav`
  display: flex;
  flex-direction: column;
`;