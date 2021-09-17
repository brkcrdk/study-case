import styled from "styled-components";

function Container({ children, ...props }) {
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
export default Container;

const StyledContainer = styled.div`
  max-width: 1280px;
  display: grid;
  margin: 0 auto;
`;
