import { Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const PrivateRoutes = () => {
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
