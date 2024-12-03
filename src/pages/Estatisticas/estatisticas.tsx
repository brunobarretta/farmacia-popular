import 'chart.js/auto';
import { Bar } from "react-chartjs-2";
import { useFarmaciaContext } from "../../hooks/useFarmacia";
import * as Style from "./styles";

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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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
    <Style.Container>
      <Style.ChartWrapper>
        <Style.Title>Estatísticas de Farmácias por Estado</Style.Title>
        <Style.ChartContainer>
          <Bar data={data} options={options} />
        </Style.ChartContainer>
      </Style.ChartWrapper>
    </Style.Container>
  );
};

export default Estatisticas;