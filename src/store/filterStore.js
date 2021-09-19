import { useState, createContext } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(1);

  const onPageChange = (goTo) => setActivePage(goTo);

  const values = { activePage, onPageChange };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
