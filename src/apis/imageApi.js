import { getCookie } from '../utils/cookieManage';

const postImage = async (image) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/image`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: image,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

const deleteImage = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/image?id=${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
};

export { postImage, deleteImage };
