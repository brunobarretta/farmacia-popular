import 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { useFarmaciaContext } from "../../hooks/useFarmacia";
import * as Elements from "./styles";
import { Helmet } from 'react-helmet';

const Estatisticas = () => {
  const { farmacias } = useFarmaciaContext();

  const farmaciasPorEstado = farmacias.reduce((acc:any, farmacia) => {
    acc[farmacia.estado] = (acc[farmacia.estado] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(farmaciasPorEstado),
    datasets: [
      {
        label: 'Quantidade de Farmácias',
        data: Object.values(farmaciasPorEstado),
        backgroundColor: '#4842a3',
        borderColor: '#6e64f8',
        borderWidth: 1
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Veja as estatísticas de farmácias por estado através de um gráfico." />
        <title>Estatísticas de Farmácias Populares por Estado</title>
      </Helmet>

      <Elements.Container>
        <Elements.ChartWrapper>
          <Elements.Title>Estatísticas de Farmácias por Estado</Elements.Title>
          <Elements.ChartContainer>
            <Bar data={data} options={options} />
          </Elements.ChartContainer>
        </Elements.ChartWrapper>
      </Elements.Container>
    </>
  );
};

export default Estatisticas;