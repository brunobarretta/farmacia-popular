import styled from 'styled-components';
import { DebouncedInput } from './input';


export const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const StyledInput = styled(DebouncedInput)`
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  height: 3rem;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  width: 100%;
  
  @media (min-width: 640px) {
    width: 75%;
  }

  @media (min-width: 1024px) {
    width: 600px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 960px;
  overflow-x: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  color: #333333;
`;

export const Thead = styled.thead`
  background-color: #4842a3;
  color: #ffffff;
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  position: sticky; 
  top: 0; 
  background-color: #4842a3;
  z-index: 2; 
`;

export const Td = styled.td`
  padding: 14px;
  border: 1px solid #e0e0e0;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  padding: 1rem 0;
  font-size: 14px
`;