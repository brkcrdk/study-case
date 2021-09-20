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
  const cloneData = Array.from(state.data);

  if (action.payload === state.sort) {
    return { ...sharedProps, sort: "", data: initialData };
  }
  if (action.payload === "ASC") {
    const ASC = cloneData.sort((a, b) => a.name.localeCompare(b.name));
    return { ...sharedProps, data: ASC };
  }
  if (action.payload === "DESC") {
    const DESC = cloneData.sort((a, b) => a.name.localeCompare(b.name));
    return { ...sharedProps, data: DESC };
  }
  if (action.payload === "priceASC") {
    const priceASC = cloneData.sort((a, b) => a.realPrice - b.realPrice);
    return { ...sharedProps, data: priceASC };
  }
  if (action.payload === "priceDESC") {
    const priceDESC = cloneData.sort((a, b) => b.realPrice - a.realPrice);
    return { ...sharedProps, data: priceDESC };
  }
  return { ...sharedProps, sort: "", data: initialData };
};

export const handleColorChange = (state, action) => {
  const isExist = state.color.includes(action.payload);

  let newColors = [];
  if (isExist) {
    const filteredData = state.color.filter((c) => c !== action.payload);
    newColors = filteredData;
  } else {
    newColors = state.color.concat(action.payload);
  }

  return { ...state, color: newColors };
};

export const handleBrandChange = (state, action) => {
  const isExist = state.brand.includes(action.payload);

  let newBrand = [];
  if (isExist) {
    const filteredData = state.brand.filter((c) => c !== action.payload);
    newBrand = filteredData;
  } else {
    newBrand = state.brand.concat(action.payload);
  }

  return { ...state, brand: newBrand };
};
