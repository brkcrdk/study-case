import { useContext } from "react";
import { FilterContext } from "store";
import { paginate } from "utils";
import productData from "../data.json";

const usePagination = () => {
  const { activePage, onPageChange } = useContext(FilterContext);
  const { data, pageCount } = paginate({ page: activePage, data: productData });

  const handleNext = () => {
    if (activePage !== pageCount) return onPageChange(activePage + 1);
  };

  const handlePrev = () => {
    if (activePage !== 1) return onPageChange(activePage - 1);
  };

  const handleGoTo = (goTo) => onPageChange(goTo);
  return { data, activePage, pageCount, handlePrev, handleNext, handleGoTo };
};
export default usePagination;
