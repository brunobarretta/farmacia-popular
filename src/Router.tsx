import { Route, Routes, Outlet } from 'react-router-dom';
import Estatisticas from './pages/Estatisticas/estatisticas';
import Navbar from './components/Navbar/navbar';
import MedicamentosTable from './pages/Medicamentos/medicamentos';
import About from './pages/About/about';
import PharmMap from './pages/Map/map';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PharmMap />} />
        <Route path="dashboard" element={<Estatisticas />} />
        <Route path="medicamentos" element={<MedicamentosTable />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
