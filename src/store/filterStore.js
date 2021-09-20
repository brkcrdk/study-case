import { createContext, useReducer } from "react";
import initialData from "../data.json";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialStore = {
    data: initialData,
    activePage: 1,
    search: "",
    sort: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "onSearch": {
        if (action.payload.length > 2) {
          const filteredData = state.data.filter((product) => {
            const productName = product.name.toLowerCase();
            const expectedBrand = action.payload.toLowerCase();
            return productName.includes(expectedBrand);
          });
          return { ...state, search: action.payload, data: filteredData };
        } else {
          return { ...state, search: action.payload, data: initialData };
        }
      }
      case "onPageChange": {
        return { ...state, activePage: action.payload };
      }
      case "onSortChange": {
        if (action.payload === state.sort) {
          return { ...state, sort: "", data: initialData };
        }
        if (action.payload === "ASC") {
          const ASC = state.data
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name));
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
      }
      default: {
        return state;
      }
    }
  };

  const [test, dispatch] = useReducer(reducer, initialStore);

  const onSearch = (searchValue) => {
    dispatch({ type: "onSearch", payload: searchValue });
  };

  const onPageChange = (goTo) => {
    dispatch({ type: "onPageChange", payload: goTo });
  };

  const onSortChange = ({ filterType, value }) => {
    if (filterType === "sort") {
      dispatch({ type: "onSortChange", payload: value });
    }
  };

  const values = {
    data: test.data,
    search: test.search,
    sort: test.sort,
    activePage: test.activePage,
    onSearch,
    onPageChange,
    onSortChange,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
