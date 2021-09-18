import styled from "styled-components";
import {
  Header,
  ProductsHeader,
  Container,
  Navigation,
  ProductContainer,
  Pagination,
} from "components";

function App() {
  return (
    <main data-testid="app">
      <Header />
      <Container>
        <ProductsHeader />
        <ProductSection>
          <Navigation />
          <ProductContainer />
          <span />
          <Pagination />
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
