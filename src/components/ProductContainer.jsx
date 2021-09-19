import { useContext } from "react";
import styled from "styled-components";
import { paginate } from "utils";
import ProductCard from "./ProductCard/ProductCard";
import { FilterContext } from "store";

function ProductContainer() {
  const { activePage } = useContext(FilterContext);
  const { data } = paginate(activePage);

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
