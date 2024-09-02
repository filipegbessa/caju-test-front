import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '~/pages/Dashboard';
import NewUserPage from '~/pages/NewUser';

const AppRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/new-user" element={<NewUserPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
