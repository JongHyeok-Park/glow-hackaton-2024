import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getLogin, patchLogin } from '../apis/authApi';
import { setCookie } from '../utils/cookieManage';

function useAuth() {
  const [accessTime, refreshTime] = [2 * 60, 7 * 24 * 60];
  const [code, setCode] = useState(null);
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  const login = () => {
    getLogin(code)
      .then((data) => {
        setCookie('accessToken', data.accessToken, accessTime);
        setCookie('refreshToken', data.refreshToken, refreshTime);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const reissue = () => {
    patchLogin()
      .then((data) => {
        setCookie('accessToken', data.accessToken, accessTime);
        setCookie('refreshToken', data.refreshToken, refreshTime);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    setCode(searchParams.get('code'));
  }, [searchParams]);

  useEffect(() => {
    login();
  }, [code]);

  return { login, reissue };
}

export default useAuth;
