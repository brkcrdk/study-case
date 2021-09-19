import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";
import { usePagination } from "hooks";

function ProductContainer() {
  const { data } = usePagination();

  return (
    <ProductContainerWrapper>
      {data.map((product, index) => (
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
