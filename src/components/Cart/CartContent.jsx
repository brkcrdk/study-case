import styled, { css } from "styled-components";
import { colors } from "theme";
import CartItem from "./CartItem";

function CartContent({ isHover, cart }) {
  return (
    <CardContent isHover={isHover} data-testid="cart-content">
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.uuid}
          uuid={cartItem.uuid}
          name={cartItem.name}
          image={cartItem.image}
        />
      ))}
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
  max-height: 300px;
  overflow: auto;
  background: #fff;
  padding: 21px;
  border: ${`1px solid ${colors.lightGray}`};
  border-radius: 4px;
  display: none;
  ${(p) =>
    p.isHover &&
    css`
      display: grid;
      border-top-right-radius: 0;
    `};
`;
