import { getCookie } from '../utils/cookieManage';

const getLecture = async () => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/mentoring`);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.json();
};

const postLecture = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/mentoring`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: data,
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  return res.text();
};

const deleteLecture = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/mentoring?id=${id}`, {
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

const getLectureList = async (size, page) => {
  const res = await fetch(`${import.meta.env.VITE_APP_API_URL_B}/api/lecture/list?pageSize=${size}&pageNumber=${page}`);

  if (!res.ok) {
    const message = res.text();
    throw new Error(message);
  }

  return res.json();
};

export { getLecture, postLecture, deleteLecture, getLectureList };
