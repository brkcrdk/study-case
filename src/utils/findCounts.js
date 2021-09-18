const findCounts = (dataSet, searchKey = "") => {
  const test = [];
  const filteredOptions = [
    ...new Set(dataSet.map((product) => product[searchKey])),
  ];
  filteredOptions.forEach((option) => {
    const count = dataSet.filter((product) => product[searchKey] === option);
    return test.push({
      label: option,
      value: option.toLowerCase(),
      count: count.length,
    });
  });
  return test;
};

export default findCounts;
