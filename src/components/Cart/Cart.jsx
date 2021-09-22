import { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { colors } from "theme";
import { CartContext } from "store";
import CartContent from "./CartContent";
import ItemCount from "./ItemCount";

function Cart(props) {
  const [isHover, setIsHover] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <CartWrapper
      data-testid="cart"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      <CartText isHover={isHover && cart.length}>Sepetim</CartText>
      {!!cart.length && <ItemCount count={cart.length} />}
      <CartContent isHover={isHover && cart.length} cart={cart} />
    </CartWrapper>
  );
}
export default Cart;

const CartWrapper = styled.div`
  position: relative;
`;

const CartText = styled.span`
  position: relative;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 120px;
  color: ${colors.lightGray};
  cursor: pointer;
  background: #fff;
  border: ${`1px solid ${colors.lightGray}`};
  border-radius: 4px;
  ${(p) =>
    p.isHover &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `};
`;
