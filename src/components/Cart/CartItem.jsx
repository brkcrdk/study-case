import styled from "styled-components";
import { colors } from "theme";

function CartItem() {
  return (
    <CartItemWrapper>
      <img src="/product-images/iphone-black.png" alt="black-iphone" />
      <ItemInformations>
        <span>
          Apple iPhone 11 Pro Max iPhone 11 Pro Max iPhone 11 (Max 2 Line)
        </span>
        <button>Kaldır</button>
      </ItemInformations>
    </CartItemWrapper>
  );
}
export default CartItem;

const CartItemWrapper = styled.li`
  max-height: 72px;
  margin-bottom: 24px;
  display: flex;
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    height: 100%;
    padding: 7px;
    border: 1px solid ${colors.productImageBorder};
    border-radius: 8px;
  }
`;

const ItemInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  span {
    color: ${colors.darkGray};
    font-size: 12px;
  }
  button {
    width: 50px;
    height: 18px;
    color: ${colors.red};
    border: 1px solid ${colors.red};
    border-radius: 4px;
    font-size: 10px;
  }
`;
