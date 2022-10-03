import Layout from 'components/Layout';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { current } from 'redux/auth/authOperations';
import Loader from './components/Loader';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes/PublicRoutes';

const HomePage = lazy(() => import('./pages/Home'));
const RegisterPage = lazy(() => import('./pages/Register'));
const LoginPage = lazy(() => import('./pages/Login'));
const ContactsPage = lazy(() => import('./pages/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoutes />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
