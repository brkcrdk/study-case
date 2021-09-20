const findCounts = (dataSet, searchKey = "") => {
  if (
    !Array.isArray(dataSet) ||
    !dataSet ||
    dataSet.length === 0 ||
    !searchKey
  ) {
    return [];
  }

  const counts = [];
  const filteredOptions = [
    ...new Set(dataSet.map((product) => product[searchKey])),
  ];
  filteredOptions.forEach((option) => {
    const count = dataSet.filter((product) => product[searchKey] === option);
    return counts.push({
      label: option,
      value: option.toLowerCase(),
      count: count.length,
    });
  });
  return counts;
};

export default findCounts;
