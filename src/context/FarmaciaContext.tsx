import axios from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';

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

interface FarmaciaContextType {
  farmacias: Farmacia[];
  loading: boolean;
}

export const FarmaciaContext = createContext<FarmaciaContextType | undefined>(undefined);

export const FarmaciaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);
  const [loading, setLoading] = useState(true);
  const baseURL = "http://localhost:3000/api/farmacias";


  useEffect(() => {
    const fetchFarmacias = async () => {
      try {
        const response = await axios.get(baseURL);
        setFarmacias(response.data);
        setLoading
      } catch (error) {
        console.error('Erro ao buscar farmácias:', error);
      }
      setLoading(false)
    };

    fetchFarmacias();
  }, []);

  return (
    <FarmaciaContext.Provider value={{ farmacias, loading }}>
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
