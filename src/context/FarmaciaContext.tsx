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
  progress: number;
}

export const FarmaciaContext = createContext<FarmaciaContextType | undefined>(undefined);

export const FarmaciaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const api = import.meta.env.VITE_API;
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const baseURL = `${api}/api/farmacias`;

  useEffect(() => {
    const fetchFarmacias = async () => {
      const limit = 1000;
      let offset = 0;
      let total = 0;
      const allFarmacias: Farmacia[] = [];

      setLoading(true);

      try {
        do {
          const response = await axios.get(baseURL, { params: { offset, limit } });
          const { data, total: totalCount } = response.data;

          allFarmacias.push(...data);
          offset += limit; 
          total = totalCount;

          setFarmacias([...allFarmacias]); 
          setProgress(((allFarmacias.length / total) * 100)); 
        } while (offset < total);
      } catch (error) {
        console.error('Erro ao buscar farmácias:', error);
      }

      setLoading(false);
    };

    fetchFarmacias();
  }, []);

  return (
    <FarmaciaContext.Provider value={{ farmacias, loading, progress }}>
      {children}
    </FarmaciaContext.Provider>
  );
};

export function useFarmaciaContext() {
  const context = useContext(FarmaciaContext);
  if (!context) {
    throw new Error('useFarmaciaContext deve ser usado dentro de um FarmaciaProvider');
  }
  return context;
}
