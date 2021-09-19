import data from "../data.json";

const paginate = (page = 1) => {
  const count = 12;
  const trimStart = (page - 1) * count;
  const trimEnd = trimStart + count;
  const trimmedData = data.slice(trimStart, trimEnd);
  const pageCount = Math.ceil(data.length / count);

  return { pageCount, data: trimmedData };
};

export default paginate;
