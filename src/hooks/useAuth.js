import { useSelector } from 'react-redux';

const useAuth = () => {
  const result = useSelector(state => state.auth.isAuthenticated);
  return result;
};

export default useAuth;
