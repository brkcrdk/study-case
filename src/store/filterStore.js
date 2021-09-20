import { createContext, useReducer } from "react";
import initialData from "../data.json";
import {
  handleSortChange,
  handleSearch,
  handleColorChange,
  handleBrandChange,
} from "./filterMethods";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const initialStore = {
    data: initialData,
    activePage: 1,
    search: "",
    sort: "",
    color: [],
    brand: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "onSearch": {
        return handleSearch(state, action, initialData);
      }
      case "onPageChange": {
        return { ...state, activePage: action.payload };
      }
      case "onSortChange": {
        return handleSortChange(state, action, initialData);
      }
      case "onColorChange": {
        return handleColorChange(state, action);
      }
      case "onBrandChange": {
        return handleBrandChange(state, action);
      }
      default: {
        return state;
      }
    }
  };

  const [store, dispatch] = useReducer(reducer, initialStore);

  const onSearch = (searchValue) =>
    dispatch({ type: "onSearch", payload: searchValue });

  const onPageChange = (goTo) =>
    dispatch({ type: "onPageChange", payload: goTo });

  const onFilterChange = ({ filterType, value }) => {
    if (filterType === "sort") {
      return dispatch({ type: "onSortChange", payload: value });
    }
    if (filterType === "color") {
      return dispatch({ type: "onColorChange", payload: value });
    }
    if (filterType === "brand") {
      return dispatch({ type: "onBrandChange", payload: value });
    }
  };

  const values = {
    data: store.data,
    search: store.search,
    sort: store.sort,
    activePage: store.activePage,
    color: store.color,
    brand: store.brand,
    onSearch,
    onPageChange,
    onFilterChange,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
