export const onSortChange = (state, action, initialData) => {
  if (action.payload === state.sort) {
    return { ...state, sort: "", data: initialData };
  }
  if (action.payload === "ASC") {
    const ASC = state.data.slice().sort((a, b) => a.name.localeCompare(b.name));
    return { ...state, data: ASC, sort: action.payload };
  }
  if (action.payload === "DESC") {
    const DESC = state.data
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    return { ...state, data: DESC, sort: action.payload };
  }
  if (action.payload === "priceASC") {
    const priceASC = state.data
      .slice()
      .sort((a, b) => a.realPrice - b.realPrice);
    return { ...state, data: priceASC, sort: action.payload };
  }
  if (action.payload === "priceDESC") {
    const priceDESC = state.data
      .slice()
      .sort((a, b) => b.realPrice - a.realPrice);
    return { ...state, data: priceDESC, sort: action.payload };
  }
  return { ...state, sort: "", data: initialData };
};
