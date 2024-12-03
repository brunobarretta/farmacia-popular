import styled, { ThemeProvider } from "styled-components";
import { FarmaciaProvider } from './context/FarmaciaContext';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { theme } from "./styles/theme";

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.body};
  min-height: 100vh;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <BrowserRouter>
          <FarmaciaProvider>
            <Router />
          </FarmaciaProvider>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;