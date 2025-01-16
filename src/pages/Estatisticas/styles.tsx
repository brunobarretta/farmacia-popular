import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  background-color: #2d3748;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
  width: 100%;
  max-width: 1024px;
  padding: 32px;
  margin-top: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ChartContainer = styled.div`
  height: 100%;
`;