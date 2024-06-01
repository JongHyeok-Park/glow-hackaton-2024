import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

function Redirect() {
  const { login } = useAuth();

  useEffect(() => {
    login();
  });
}

export default Redirect;
