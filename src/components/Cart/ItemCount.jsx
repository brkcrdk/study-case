import styled from "styled-components";
import { colors } from "theme";

function ItemCount({ count = 0 }) {
  return <Count>{count}</Count>;
}
export default ItemCount;

const Count = styled.span`
  position: absolute;
  top: -9px;
  right: -9px;
  width: 18px;
  height: 18px;
  z-index: 9999;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${colors.mainOrange};
  color: #fff;
  font-size: 12px;
`;
