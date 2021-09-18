import styled from "styled-components";
import { colors } from "theme";
import { Dropdown } from "components";

function ProductsHeader() {
  const sortingOptions = [
    { label: "En Düşük Fiyat", value: "priceASC" },
    { label: "En Yüksek Fiyat", value: "priceDESC" },
    { label: "En Yeniler (A>Z)", value: "ASC" },
    { label: "En Yeniler (Z>A)", value: "DESC" },
  ];
  return (
    <ProductsHeaderWrapper>
      <SearchedQuery>
        <h3>iPhone iOS cep telefonu</h3>
        <span>
          Aranan Kelime: <strong>iphone 11</strong>
        </span>
      </SearchedQuery>
      <Dropdown
        placeholder="Sıralama"
        options={sortingOptions}
        onChange={(e) => console.log(e.target.value)}
      />
    </ProductsHeaderWrapper>
  );
}

export default ProductsHeader;

const ProductsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const SearchedQuery = styled.div`
  h3 {
    font-size: 28px;
    line-height: 100%;
    color: ${colors.darkGray};
  }
  span {
    color: ${colors.lightGray};
    font-size: 15px;
    strong {
      color: #000;
    }
  }
`;
