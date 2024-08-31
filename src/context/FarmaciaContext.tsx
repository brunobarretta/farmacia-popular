import React, { createContext, useState, useContext } from 'react';

// Interface para o tipo de dados da farmácia
interface Farmacia {
  _id: string;
  nome: string;
  cnpj: string;
  endereco: string;
  cidade: string;
  estado: string;
  data_credenciamento: string;
  latitude: number;
  longitude: number;
}

// Interface para o contexto
interface FarmaciaContextType {
  farmacias: Farmacia[];
  setFarmacias: React.Dispatch<React.SetStateAction<Farmacia[]>>;
}

// Criar o contexto com valores iniciais vazios
export const FarmaciaContext = createContext<FarmaciaContextType | undefined>(undefined);

// Criar o provider do contexto
export const FarmaciaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado para armazenar a lista de farmácias
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);

  return (
    <FarmaciaContext.Provider value={{ farmacias, setFarmacias }}>
      {children}
    </FarmaciaContext.Provider>
  );
};

// Hook customizado para utilizar o contexto
export function useFarmaciaContext() {
  const context = useContext(FarmaciaContext);
  if (!context) {
    throw new Error('useFarmaciaContext deve ser usado dentro de um FarmaciaProvider');
  }
  return context;
}
