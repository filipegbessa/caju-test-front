import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import DashboardPage from '~/pages/Dashboard';
import NewUserPage from '~/pages/NewUser';
import routes from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import LoginPage from '~/pages/Login';

const AppRouter = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route
          path={routes.dashboard}
          element={<ProtectedRoute element={<DashboardPage />} />}
        />
        <Route
          path={routes.newUser}
          element={<ProtectedRoute element={<NewUserPage />} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
