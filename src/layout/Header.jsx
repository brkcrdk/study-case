import styled from "styled-components";
import { Container, SearchInput } from "components";

function Header() {
  return (
    <HeaderContainer>
      <img src="/hepsiburada-logo.svg" alt="Logo" />
      <SearchInput placeholder="25 milyon’dan fazla ürün içerisinde ara" />
      <button>Sepetim</button>
    </HeaderContainer>
  );
}
export default Header;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
`;
