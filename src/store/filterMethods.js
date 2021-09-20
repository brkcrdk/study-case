export const handleSearch = (state, action, initialData) => {
  const sharedProps = { ...state, search: action.payload, activePage: 1 };
  if (action.payload.length > 2) {
    const filteredData = state.data.filter((product) => {
      const productName = product.name.toLowerCase();
      const expectedBrand = action.payload.toLowerCase();
      return productName.includes(expectedBrand);
    });
    return {
      ...sharedProps,
      data: filteredData,
    };
  } else {
    return {
      ...sharedProps,
      data: initialData,
    };
  }
};

export const handleSortChange = (state, action, initialData) => {
  const sharedProps = { ...state, sort: action.payload, activePage: 1 };

  if (action.payload === state.sort) {
    return { ...sharedProps, sort: "", data: initialData };
  }
  if (action.payload === "ASC") {
    const ASC = state.data.slice().sort((a, b) => a.name.localeCompare(b.name));
    return { ...sharedProps, data: ASC };
  }
  if (action.payload === "DESC") {
    const DESC = state.data
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    return { ...sharedProps, data: DESC };
  }
  if (action.payload === "priceASC") {
    const priceASC = state.data
      .slice()
      .sort((a, b) => a.realPrice - b.realPrice);
    return { ...sharedProps, data: priceASC };
  }
  if (action.payload === "priceDESC") {
    const priceDESC = state.data
      .slice()
      .sort((a, b) => b.realPrice - a.realPrice);
    return { ...sharedProps, data: priceDESC };
  }
  return { ...sharedProps, sort: "", data: initialData };
};
