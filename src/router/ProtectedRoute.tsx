import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '~/api/user';
import { localStorageEnum } from '~/enum';

type ProtectedRouteProps = {
  element: JSX.Element;
};

export const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(localStorageEnum.TOKEN) || '';
      const authResult = await isAuthenticated(token);
      setIsAuth(Boolean(authResult));
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? element : <Navigate to="/login" replace />;
};
