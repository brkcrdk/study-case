import styled from "styled-components";
import {
  Header,
  ProductsHeader,
  Container,
  Navigation,
  ProductContainer,
  Pagination,
} from "components";
import { usePagination } from "hooks";

function App() {
  const { pageCount, data } = usePagination();
  return (
    <main data-testid="app">
      <Header />
      <Container>
        <ProductsHeader />
        <ProductSection>
          <Navigation />
          {data.length ? (
            <ProductContainer />
          ) : (
            <span data-testid="nothing-found">
              Aradığınız sonuç bulunamadı.
            </span>
          )}
          <span />
          {pageCount > 1 && <Pagination />}
        </ProductSection>
      </Container>
    </main>
  );
}

export default App;

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
  margin-bottom: 32px;
`;
