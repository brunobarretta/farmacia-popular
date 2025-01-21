import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  background: #2d3748;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
`

export const Header = styled.div`
  margin-bottom: 20px;
  max-width: 960px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  text-align: start;
  line-height: 1.6;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  span {
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
    color: #222;
  }

  ul {
    margin-top: 10px;
    padding-left: 20px;
    list-style: disc;

    li a {
      color: ${({ theme }) => theme.colors.lightPurple};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 10px 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.lightPurple};
  }

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.lightPurple};
  }

  u {
    text-decoration: underline;
  }
`;

export const Links = styled.div`
  margin: 30px 0px;
`

export const TableContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 20; 
`;