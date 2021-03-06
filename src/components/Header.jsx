import styled from "styled-components";
import { Container, SearchInput, Cart } from "components";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src="/hepsiburada-logo.svg" alt="Logo" />
        <SearchInput placeholder="25 milyon’dan fazla ürün içerisinde ara" />
        <Cart />
      </HeaderContainer>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
`;
