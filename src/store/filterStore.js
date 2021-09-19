import { useState, createContext } from "react";
import initialData from "../data.json";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({});

  const onSearch = (searchValue) => {
    setSearch(searchValue);
    if (searchValue.length > 2) {
      const filteredData = data.filter((product) => {
        const productName = product.name.toLowerCase();
        const expectedBrand = searchValue.toLowerCase();
        return productName.includes(expectedBrand);
      });
      setData(filteredData);
    } else {
      setData(initialData);
    }
  };

  const onPageChange = (goTo) => setActivePage(goTo);

  const onSortChange = (sortOption) => {
    setSort(sortOption);
    console.log(sortOption);
    switch (sortOption) {
      case "ASC": {
        return data.sort((a, b) => a.name.localeCompare(b.name));
      }
      case "DESC": {
        return data.sort((a, b) => b.name.localeCompare(a.name));
      }
      case "priceASC": {
        return data.sort((a, b) => a.realPrice - b.realPrice);
      }
      case "priceDESC": {
        return data.sort((a, b) => b.realPrice - a.realPrice);
      }
      default: {
        return data;
      }
    }
  };

  const values = {
    data,
    search,
    onSearch,
    activePage,
    onPageChange,
    sort,
    onSortChange,
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
