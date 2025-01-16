import { useEffect, useState } from 'react';
import Table from '../../components/Table/table';
import * as Elements from "./styles";
import { Helmet } from 'react-helmet';
import axios from 'axios';


const MedicamentosTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = import.meta.env.VITE_API;

  const columns = [
    {
      accessorKey: 'tipo',
      header: 'Modalidade',
    },
    {
      accessorKey: 'patologia',
      header: 'Patologia',
    },
    {
      accessorKey: 'medicamento',
      header: 'Princípios ativos / insumos',
    },
  ];

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const response = await axios.get(`${api}/api/medicamentos`);
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedicamentos();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="Veja a lista completa de medicamentos do programa Farmácia Popular do governo. Acesse informações detalhadas sobre os medicamentos gratuitos disponíveis para você." />
        <title>Medicamentos das Farmácias Populares</title>
      </Helmet>

      <Elements.Container>
        <Elements.Header>
          <Elements.Title>Farmácia Popular - Medicamentos</Elements.Title>
          <Elements.Description>
            <span>💊 <strong>Medicamentos Gratuitos e com Desconto</strong></span>
            <p>
              O <strong>Programa Farmácia Popular</strong> oferece medicamentos gratuitos ou com descontos para 
              condições crônicas como <em>diabetes, asma, hipertensão, osteoporose</em> e muito mais. 
              Beneficiários do <strong>Bolsa Família</strong> têm acesso a todos os medicamentos <u>sem custo adicional</u>.
            </p>
            <p>
              Exemplos incluem <strong>sinvastatina</strong> para dislipidemia, <strong>alendronato</strong> para osteoporose e <strong>insulina</strong> para diabetes. 
              Também estão disponíveis fraldas geriátricas para incontinência.
            </p>
            <p>
              Qualquer pessoa com receita médica válida pode retirar medicamentos. 
              Representantes legais também podem retirar em nome de pacientes impossibilitados de ir à farmácia.
            </p>
            <Elements.Links>
              <strong>🔗 Links úteis:</strong>
              <ul>
                <li>
                  <a 
                    href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Sobre o Programa Farmácia Popular
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular/arquivos/elenco-de-medicamentos-e-insumos.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Lista de Medicamentos e Insumos
                  </a>
                </li>
              </ul>
            </Elements.Links>
          </Elements.Description>
        </Elements.Header>
        <Table data={data} columns={columns} />
      </Elements.Container>
    </>
  );
};

export default MedicamentosTable;
