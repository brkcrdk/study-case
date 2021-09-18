import styled from "styled-components";
import {
  Header,
  ProductsHeader,
  Container,
  Navigation,
  ProductContainer,
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
        </ProductSection>
      </Container>
    </main>
  );
}

export default App;

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;
