import styled from "styled-components";
import { Icon } from "components";
import { colors } from "theme";
function Pagination() {
  return (
    <PaginationWrapper>
      <li className="prev">
        <Icon size={6} name="left-icon" />
      </li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li className="next">
        <Icon size={6} name="right-icon" />
      </li>
    </PaginationWrapper>
  );
}

export default Pagination;

const PaginationWrapper = styled.ul`
  margin-top: 32px;
  display: flex;
  align-items: center;
  color: ${colors.navText};
  li {
    display: grid;
    place-items: center;
    margin: 0 4px;
    border-radius: 8px;
    border: 1px solid ${colors.paginationBorder};
    padding: 6px;
    width: 33px;
    height: 33px;
    cursor: pointer;
    font-size: 10px;
  }
`;
