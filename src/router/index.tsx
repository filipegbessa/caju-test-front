import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import DashboardPage from '~/pages/Dashboard';
import NewUserPage from '~/pages/NewUser';
import routes from './routes';

const AppRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index path={routes.init} element={<DashboardPage />} />
        <Route path={routes.newUser} element={<NewUserPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
