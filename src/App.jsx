import { Header, ProductsHeader, Container } from "components";

function App() {
  return (
    <main data-testid="app">
      <Header />
      <Container>
        <ProductsHeader />
      </Container>
    </main>
  );
}

export default App;
