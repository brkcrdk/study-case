import data from "./data.json";

const paginatedData = (page = 1) => {
  const count = 12;
  const trimStart = (page - 1) * count;
  const trimEnd = trimStart + count;
  const trimmedData = data.slice(trimStart, trimEnd);
  const pages = Math.ceil(data.length / count);

  return { pages, data: trimmedData };
};

export default paginatedData;
