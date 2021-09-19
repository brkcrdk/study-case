import { useContext } from "react";
import styled, { css } from "styled-components";
import { Icon } from "components";
import { colors } from "theme";
import { paginate } from "utils";
import productData from "../data.json";
import { FilterContext } from "store";

function Pagination() {
  const { activePage, onPageChange } = useContext(FilterContext);
  const { pageCount } = paginate({ data: productData });

  const handleNext = () => {
    if (activePage !== pageCount) return onPageChange(activePage + 1);
  };

  const handlePrev = () => {
    if (activePage !== 1) return onPageChange(activePage - 1);
  };

  return (
    <PaginationWrapper>
      <PageItem
        className="prev"
        disabled={activePage === 1}
        onClick={handlePrev}
      >
        <Icon size={8} name="left-icon" />
      </PageItem>
      {[...Array(pageCount).keys()].map((page, index) => (
        <PageItem
          className={activePage === page + 1 ? "active" : ""}
          key={`pagination-page-${page}`}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </PageItem>
      ))}
      <PageItem
        className="next"
        disabled={activePage === pageCount}
        onClick={handleNext}
      >
        <Icon size={8} name="right-icon" />
      </PageItem>
    </PaginationWrapper>
  );
}

export default Pagination;

const PaginationWrapper = styled.ul`
  margin-top: 32px;
  display: flex;
  align-items: center;
  color: ${colors.navText};
`;

const PageItem = styled.li`
  display: grid;
  place-items: center;
  margin: 0 4px;
  border-radius: 8px;
  border: 1px solid ${colors.paginationBorder};
  padding: 6px;
  width: 33px;
  height: 33px;
  cursor: pointer;
  font-size: 12px;
  &.active,
  &.prev:hover,
  &.next:hover {
    font-weight: 600;
    color: ${colors.mainOrange};
  }
  ${(p) =>
    p.disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;
