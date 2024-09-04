import 'chart.js/auto';
import { Bar } from "react-chartjs-2"
import { useFarmaciaContext } from "../hooks/useFarmacia";

const Dashboard = () => {
  const { farmacias } = useFarmaciaContext();

  const farmaciasPorEstado = farmacias.reduce((acc, farmacia) => {
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
    <div className="h-[calc(100vh-72px)] py-5 px-10 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg shadow-md w-full max-w-4xl p-8">
        <div className="text-2xl font-semibold mb-6 text-center">
          Estatísticas de Farmácias por Estado
        </div>
        <div className="h-full">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard