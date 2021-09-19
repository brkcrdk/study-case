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
  const { data, activePage, pageCount, handleNext, handlePrev, handleGoTo } =
    usePagination();
  return (
    <main data-testid="app">
      <Header />
      <Container>
        <ProductsHeader />
        <ProductSection>
          <Navigation />
          {data.length ? (
            <ProductContainer products={data} />
          ) : (
            <span data-testid="nothing-found">
              Aradığınız sonuç bulunamadı.
            </span>
          )}
          <span />
          {pageCount > 1 && (
            <Pagination
              activePage={activePage}
              pageCount={pageCount}
              handleNext={handleNext}
              handlePrev={handlePrev}
              handleGoTo={(goTo) => handleGoTo(goTo)}
            />
          )}
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
