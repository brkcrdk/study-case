import styled, { css } from "styled-components";
import { colors } from "theme";
import CartItem from "./CartItem";

function CartContent({ isHover }) {
  return (
    <CardContent isHover={isHover} data-testid="cart-content">
      <CartItem />
      <CartItem />
      <CartItem />
    </CardContent>
  );
}
export default CartContent;

const CardContent = styled.ul`
  position: absolute;
  top: 47px;
  right: 0;
  width: 100%;
  min-width: 360px;
  background: #fff;
  padding: 21px;
  border: ${`1px solid ${colors.inputGray}`};
  border-radius: 4px;
  display: none;
  ${(p) =>
    p.isHover &&
    css`
      display: grid;
      border-top-right-radius: 0;
    `};
`;
