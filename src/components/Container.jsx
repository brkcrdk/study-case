import styled from "styled-components";

function Container({ children, ...props }) {
  return <CustomContainer {...props}>{children}</CustomContainer>;
}
export default Container;

const CustomContainer = styled.div`
  max-width: 1280px;
  display: grid;
  margin: 0 auto;
`;
