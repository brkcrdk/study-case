import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "store";
import { colors } from "theme";
import { Dropdown } from "components";
import navOptions from "navOptions";

function ProductsHeader() {
  const { search, sort, onFilterChange } = useContext(FilterContext);
  const sortingOptions = navOptions[1].options;
  return (
    <ProductsHeaderWrapper>
      <SearchedQuery>
        <h3>iPhone iOS cep telefonu</h3>
        {search.length > 2 && (
          <span>
            Aranan Kelime: <strong>{search}</strong>
          </span>
        )}
      </SearchedQuery>
      <Dropdown
        placeholder="Sıralama"
        options={sortingOptions}
        value={sort}
        onChange={(e) =>
          onFilterChange({
            value: e.target.value,
            filterType: "sort",
          })
        }
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
