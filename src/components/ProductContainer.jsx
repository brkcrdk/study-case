import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "store";
import { paginate } from "utils";
import productData from "../data.json";
import ProductCard from "./ProductCard/ProductCard";

function ProductContainer() {
  const { activePage } = useContext(FilterContext);
  const { data } = paginate({ page: activePage, data: productData });

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
