import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  color: #f7fafc;
`;

export const Description = styled.div`
  text-align: start;
  line-height: 1.6;
  font-size: 16px;
  color: #f7fafc;

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
      color: #7979ff;
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
    color: #7979ff;
  }

  em {
    font-style: italic;
    color: #7979ff;
  }

  u {
    text-decoration: underline;
  }
`;

export const Links = styled.div`
  margin: 30px 0px;
`