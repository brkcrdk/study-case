import { useState, createContext } from "react";
import initialData from "../data.json";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [data, setData] = useState(initialData);
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");

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

  const values = { data, search, onSearch, activePage, onPageChange };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
