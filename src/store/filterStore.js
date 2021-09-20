import { createContext, useReducer } from "react";
import initialData from "../data.json";
import { handleSortChange, handleSearch } from "./filterMethods";

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

  const onFilterChange = ({ filterType, value }) => {
    if (filterType === "sort") {
      dispatch({ type: "onSortChange", payload: value });
    }
    if (filterType === "color") {
      dispatch({ type: "onColorChange", payload: value });
    }
  };

  const values = {
    data: test.data,
    search: test.search,
    sort: test.sort,
    activePage: test.activePage,
    onSearch,
    onPageChange,
    onFilterChange,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
