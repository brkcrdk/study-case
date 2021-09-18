import styled from "styled-components";
import { colors } from "theme";

function ProductInformation() {
  return (
    <>
      <ProductInformationWrapper>
        <span>
          <strong>Marka:</strong> Apple
        </span>
        <span>
          <strong>Renk:</strong> Siyah
        </span>
      </ProductInformationWrapper>
      <strong className="netPrice">90,85 TL</strong>
      <PriceInformations>
        <span className="realPrice">124,00 TL</span>
        <strong className="discount">12%</strong>
      </PriceInformations>
    </>
  );
}
export default ProductInformation;

const ProductInformationWrapper = styled.div`
  display: grid;
  margin-bottom: 14px;
  font-size: 12px;
  span {
    color: ${colors.darkGray};
  }
`;

const PriceInformations = styled.div`
  .realPrice {
    color: ${colors.realPrice};
    text-decoration: line-through;
    font-size: 13px;
  }
  .discount {
    margin-left: 4px;
    color: ${colors.red};
    font-size: 12px;
  }
`;
