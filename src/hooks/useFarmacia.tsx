import { useContext } from 'react';
import { FarmaciaContext } from '../context/FarmaciaContext';

export function useFarmaciaContext() {
  const context = useContext(FarmaciaContext);

  if (!context) {
    throw new Error('useFarmaciaContext deve ser usado dentro de um FarmaciaProvider');
  }

  return context;
}