const paginate = ({ page = 1, data, itemCount = 12 }) => {
  const computedData = Array.isArray(data) ? data : [];
  const computedPage = page < 0 ? 1 : page;

  const trimStart = (computedPage - 1) * itemCount;
  const trimEnd = trimStart + itemCount;
  const trimmedData = computedData.slice(trimStart, trimEnd);
  const pageCount = Math.ceil(computedData.length / itemCount);

  return { pageCount, data: trimmedData };
};

export default paginate;
