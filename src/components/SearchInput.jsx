import styled from "styled-components";
import { Icon } from "components";

function SearchInput(props) {
  return (
    <Wrapper>
      <Icon name="search" size={18} />
      <CustomInput {...props} data-testid="search-input" />
    </Wrapper>
  );
}
export default SearchInput;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 695px;
  height: 48px;
  .icon {
    position: absolute;
    left: 27px;
    top: 15px;
  }
`;

const CustomInput = styled.input`
  width: 100%;
  font-size: 15px;
  background: #eee;
  height: 100%;
  padding: 0 56px;
  border-radius: 100px;
`;
