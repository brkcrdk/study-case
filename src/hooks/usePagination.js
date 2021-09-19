import { useContext } from "react";
import { FilterContext } from "store";
import { paginate } from "utils";

const usePagination = () => {
  const { data, activePage, onPageChange } = useContext(FilterContext);
  const { data: paginatedData, pageCount } = paginate({
    page: activePage,
    data,
  });

  const handleNext = () => {
    if (activePage !== pageCount) return onPageChange(activePage + 1);
  };
  const handlePrev = () => {
    if (activePage !== 1) return onPageChange(activePage - 1);
  };
  const handleGoTo = (goTo) => onPageChange(goTo);

  return {
    data: paginatedData,
    activePage,
    pageCount,
    handlePrev,
    handleNext,
    handleGoTo,
  };
};
export default usePagination;
