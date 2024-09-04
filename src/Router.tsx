import { Route, Routes, Outlet } from 'react-router-dom';
import MapComponent from './components/Map/Map';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import MedicamentosTable from './pages/Medicamentos';

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
        <Route index element={<MapComponent />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="medicamentos" element={<MedicamentosTable />} />
      </Route>
    </Routes>
  );
}
