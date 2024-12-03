import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 72px);
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem; 
  font-weight: bold;
`;

export const Description = styled.p`
  color: #4a5568;
  text-align: start;
`;