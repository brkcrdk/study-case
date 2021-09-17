import { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "theme";
import CartItem from "./CartItem";

function Cart({ ...props }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <CartWrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      <CartText isHover={isHover}>Sepetim</CartText>
      <CardContent isHover={isHover}>
        <CartItem />
        <CartItem />
        <CartItem />
      </CardContent>
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
  color: ${colors.inputGray};
  cursor: pointer;
  background: #fff;
  border: ${`1px solid ${colors.inputGray}`};
  border-radius: 4px;
  ${(p) =>
    p.isHover &&
    css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `};
`;

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
