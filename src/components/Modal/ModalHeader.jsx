import styled from "styled-components";
import { colors } from "theme";

function ModalHeader({ header, closeModal }) {
  return (
    <StyledContentHeader>
      <h5>{header}</h5>
      <button onClick={closeModal}>X</button>
    </StyledContentHeader>
  );
}
export default ModalHeader;

const StyledContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 23px 18px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid ${colors.cardBorder};
  color: ${colors.darkGray};
`;
