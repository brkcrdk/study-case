import styled from "styled-components";
import data from "../data.json";
import ProductCard from "./ProductCard/ProductCard";

function ProductContainer() {
  return (
    <ProductContainerWrapper>
      {data.map((product, index) => (
        <ProductCard key={`product-${index}`} />
      ))}
    </ProductContainerWrapper>
  );
}
export default ProductContainer;

const ProductContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;
