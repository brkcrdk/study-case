export const handleSearch = (state, action, initialData) => {
  const sharedProps = { ...state, search: action.payload };

  if (action.payload.length > 2) {
    const filteredData = state.data.filter((product) => {
      const productName = product.name.toLowerCase();
      const expectedBrand = action.payload.toLowerCase();
      return productName.includes(expectedBrand);
    });
    return {
      ...sharedProps,
      activePage: 1,
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
    const DESC = cloneData.sort((a, b) => b.name.localeCompare(a.name));
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
    const filteredData = state.color.filter(
      (color) => color !== action.payload
    );
    newColors = filteredData;
  } else {
    newColors = state.color.concat(action.payload);
  }
  return { ...state, color: newColors, activePage: 1 };
};

export const handleBrandChange = (state, action) => {
  const isExist = state.brand.includes(action.payload);
  let newBrand = [];
  if (isExist) {
    const filteredData = state.brand.filter(
      (brand) => brand !== action.payload
    );
    newBrand = filteredData;
  } else {
    newBrand = state.brand.concat(action.payload);
  }

  return { ...state, brand: newBrand, activePage: 1 };
};

export const filterProducts = (data, color, brand, initialData) => {
  return data.filter((product) => {
    const colorName = product.color.toLowerCase();
    const brandName = product.brand.toLowerCase();
    if (color.length && !brand.length) {
      return color?.includes(colorName);
    }
    if (brand.length && !color.length) {
      return brand?.includes(brandName);
    }
    if (brand.length && color.length) {
      return color?.includes(colorName) && brand?.includes(brandName);
    }
    return initialData;
  });
};
