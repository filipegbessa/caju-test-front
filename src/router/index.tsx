import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from '~/pages/Dashboard';
import NewUserPage from '~/pages/NewUser';
import routes from './routes';

const AppRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route index path={routes.dashboard} element={<DashboardPage />} />
        <Route path={routes.newUser} element={<NewUserPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
