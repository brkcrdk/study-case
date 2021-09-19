import styled from "styled-components";
import { colors } from "theme";

function ProductInformation({ productInformation }) {
  const { brand, color, discount, realPrice } = productInformation;
  const discountPrice = (realPrice - (realPrice * discount) / 100).toFixed(0);

  return (
    <>
      <ProductInformationWrapper>
        <span>
          <strong>Marka:</strong> {brand}
        </span>
        <span>
          <strong>Renk:</strong> {color}
        </span>
        {!!discount && (
          <strong className="netPrice">{discountPrice},00 TL</strong>
        )}
      </ProductInformationWrapper>
      <PriceInformations hasDiscount={discount}>
        <span className="realPrice">{realPrice},00 TL</span>
        {!!discount && <strong className="discount">{discount}%</strong>}
      </PriceInformations>
    </>
  );
}
export default ProductInformation;

const ProductInformationWrapper = styled.div`
  display: grid;
  /* margin-bottom: 14px; */
  font-size: 12px;
  span {
    color: ${colors.darkGray};
  }
  .netPrice {
    margin-top: 14px;

    font-size: 14px;
  }
`;

const PriceInformations = styled.div`
  margin-top: ${(p) => !p.hasDiscount && "28px"};
  .realPrice {
    color: ${(p) => p.hasDiscount && colors.realPrice};
    font-size: 13px;
    text-decoration: ${(p) => p.hasDiscount && "line-through"};
    font-weight: ${(p) => !p.hasDiscount && "700"};
  }
  .discount {
    margin-left: 4px;
    color: ${colors.danger};
    font-size: 12px;
  }
`;
