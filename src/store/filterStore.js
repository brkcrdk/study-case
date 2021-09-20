import { createContext, useReducer } from "react";
import initialData from "../data.json";
import { onSortChange } from "./filterMethods";

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
        return onSortChange(state, action, initialData);
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
