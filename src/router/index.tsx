import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashboardPage from '~/pages/Dashboard';
import NewUserPage from '~/pages/NewUser';
import routes from './routes';

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index path={routes.dashboard} element={<DashboardPage />} />
        <Route path={routes.newUser} element={<NewUserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
