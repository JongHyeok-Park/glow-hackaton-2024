import { getCookie } from '../utils/cookieManage';

const getProfile = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_A}/api/profile?id=${id}`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

const getMyProfile = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_A}/api/profile?id=${id}`, {
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

const postProfile = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_A}/api/profile`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
};

export { getProfile, postProfile, getMyProfile };
