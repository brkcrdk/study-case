import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

function ProductContainer({ products }) {
  return (
    <ProductContainerWrapper data-testid="product-container">
      {products.map((product, index) => (
        <ProductCard key={`product-${index}`} productInfo={product} />
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
