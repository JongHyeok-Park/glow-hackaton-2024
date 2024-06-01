import { getCookie } from '../utils/cookieManage';

/**
 * 카카오 코드를 통해서 accessToken, refreshToken 받기 (로그인)
 * @param {String} code 카카오 로그인 코드
 * @returns accessToken, refreshToken
 */
const getLogin = async (code) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login?code=${code}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

/**
 * refreshToken으로 accessToken 갱신
 * @returns accessToken, refreshToken
 */
const patchLogin = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${getCookie('refreshToken')}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

export { getLogin, patchLogin };
