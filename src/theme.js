export const colors = {
  mainOrange: "#ff6000",
  lightGray: "#b0b0b0",
  darkGray: "#484848",
  navText: "#646464",
  realPrice: "#9b9b9b",
  cardBorder: "#cdcdcd",
  productImageBorder: "#e5e5e5",
  red: "#f90000",
  disabledBtnBackground: "#f1f1f1",
  btnBackground: "#ffeee3",
  paginationBorder: "#eee",
};

export const lineClamp = (clampCount) => {
  return `
  display: -webkit-box;
  -webkit-line-clamp: ${clampCount};
  -webkit-box-orient: vertical;
  overflow: hidden;
  `;
};
