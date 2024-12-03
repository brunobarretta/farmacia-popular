import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 72px);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChartWrapper = styled.div`
  background-color: #2d3748; /* Substitui bg-gray-800 */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Substitui shadow-md */
  width: 100%;
  max-width: 1024px;
  padding: 32px;
`;

export const Title = styled.div`
  font-size: 1.5rem; /* Substitui text-2xl */
  font-weight: 600;
  margin-bottom: 24px; /* Substitui mb-6 */
  text-align: center;
  color: #f7fafc; /* Substitui texto padrão de Tailwind */
`;

export const ChartContainer = styled.div`
  height: 100%;
`;