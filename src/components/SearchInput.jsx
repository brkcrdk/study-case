import styled from "styled-components";
import { Icon } from "components";

function SearchInput(props) {
  return (
    <SeearchInputWrapper>
      <Icon name="search" size={18} />
      <CustomInput {...props} data-testid="search-input" />
    </SeearchInputWrapper>
  );
}
export default SearchInput;

const SeearchInputWrapper = styled.div`
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
