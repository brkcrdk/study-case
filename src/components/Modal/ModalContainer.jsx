import { useRef } from "react";
import styled from "styled-components";
import { useOutsideClick } from "hooks";

function ModalContainer({ children, isModalOpen, closeModal }) {
  const modalRef = useRef();

  useOutsideClick(modalRef, closeModal);

  return <StyledModalContainer ref={modalRef}>{children}</StyledModalContainer>;
}
export default ModalContainer;

const StyledModalContainer = styled.div`
  background: #fff;
  opacity: 1;
  border-radius: 4px;
  width: 400px;
  box-shadow: 0px 6px 12px rgba(50, 50, 71, 0.07);
`;
