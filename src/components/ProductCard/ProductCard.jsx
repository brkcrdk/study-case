import { useState } from "react";
import styled from "styled-components";
import { colors, lineClamp } from "theme";
import ProductInformation from "./ProductInformation";

function ProductCard({ productInfo }) {
  const [isHovered, setIsHovered] = useState(false);
  const { image, name, discount, realPrice, brand, color } = productInfo;
  return (
    <ProductCardWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      isHovered={isHovered}
    >
      <ProductImage isHovered={isHovered} src={image} />
      <ProductDetails>
        <ProductTitle>{name}</ProductTitle>
        {isHovered ? (
          <BuyButton>Sepete Ekle</BuyButton>
        ) : (
          <ProductInformation
            productInformation={{
              discount,
              realPrice,
              brand,
              color,
            }}
          />
        )}
      </ProductDetails>
    </ProductCardWrapper>
  );
}
export default ProductCard;

const sharedStyle = `
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
`;

const ProductCardWrapper = styled.article`
  ${sharedStyle};
  border-color: ${(p) => (!p.isHovered ? "transparent" : colors.cardBorder)};
`;

const ProductImage = styled.img`
  padding: 3px 15px;
  width: 256px;
  height: 332px;
  object-fit: contain;
  ${sharedStyle};
  border-color: ${(p) =>
    p.isHovered ? "transparent" : colors.productImageBorder};
`;

const ProductDetails = styled.section`
  display: grid;
  margin: 0 auto;
  max-width: 230px;
`;

const ProductTitle = styled.h4`
  ${lineClamp(2)};
  margin: 10px 0;
  color: ${colors.darkGray};
  font-weight: 400;
  font-size: 12px;
  height: 28px;
`;

const BuyButton = styled.button`
  font-weight: 600;
  border-radius: 4px;
  color: ${colors.mainOrange};
  background: ${colors.btnBackground};
  font-size: 13px;
  padding: 8px 0;
  margin-top: 24px;
  &:disabled {
    pointer-events: none;
    background: ${colors.disabledBtnBackground};
    color: ${colors.lightGray};
  }
`;
