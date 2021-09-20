import { createContext, useState, useReducer, useEffect } from "react";
import initialData from "../data.json";
import {
  handleSortChange,
  handleSearch,
  handleColorChange,
  handleBrandChange,
} from "./filterMethods";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const initialStore = {
    data,
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

  useEffect(() => {
    const handleFilter = (data, colors, brand) => {
      const newState = data.filter((d) => {
        const colorName = d.color.toLowerCase();
        const brandName = d.brand.toLowerCase();
        if (colors.length && !brand.length) {
          return colors?.includes(colorName);
        }
        if (brand.length && !colors.length) {
          return brand?.includes(brandName);
        }
        if (brand.length && colors.length) {
          return colors?.includes(colorName) && brand?.includes(brandName);
        }
        return initialData;
      });
      return newState;
    };

    const newState = handleFilter(store.data, store.color, store.brand);
    setData(newState);
  }, [store]);

  const values = {
    data,
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
