const dateFormat = (inputDate) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();

  const result = `${year}-${month}-${day}`;

  return result;
};

export default dateFormat;
