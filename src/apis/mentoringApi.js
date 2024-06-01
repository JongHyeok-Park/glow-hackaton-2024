import { getCookie } from '../utils/cookieManage';

const getMentoring = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL_B}/api/mentoring?id=${id}`);

  if (!res.ok) {
    const message = res.text();
    throw new Error(message);
  }

  return res.json();
};

const postMentoring = async (data) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL_B}/api/mentoring`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${getCookie('accessToken')}`,
    },
    body: data,
  });

  if (!res.ok) {
    const message = res.text();
    throw new Error(message);
  }

  return res.text();
};

const getMentoringList = async (size, page) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL_B}/api/mentoring?pageSize=${size}&pageNumber=${page}`);

  if (!res.ok) {
    const message = res.text();
    throw new Error(message);
  }

  return res.json();
};

export { getMentoring, postMentoring, getMentoringList };
