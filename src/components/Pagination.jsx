import styled, { css } from "styled-components";
import { Icon } from "components";
import { colors } from "theme";

function Pagination({
  activePage = 1,
  pageCount = 2,
  handlePrev,
  handleGoTo,
  handleNext,
}) {
  return (
    <PaginationWrapper data-testid="pagination">
      <PageItem
        data-testid="pagination-prev"
        className="prev"
        disabled={activePage === 1}
        onClick={handlePrev}
      >
        <Icon size={8} name="left-icon" />
      </PageItem>
      {[...Array(pageCount).keys()].map((page) => (
        <PageItem
          data-testid="pagination-item"
          className={activePage === page + 1 ? "active" : ""}
          key={`pagination-page-${page}`}
          onClick={() => handleGoTo(page + 1)}
        >
          {page + 1}
        </PageItem>
      ))}
      <PageItem
        data-testid="pagination-next"
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
