import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "store";
import ModalContainer from "./ModalContainer";
import ModalHeader from "./ModalHeader";
import { colors } from "theme";

function Modal() {
  const { content, header, closeModal, isModalOpen } = useContext(ModalContext);

  return (
    <StyledModal isModalOpen={isModalOpen}>
      <ModalContainer isModalOpen={isModalOpen} closeModal={closeModal}>
        <ModalHeader header={header} closeModal={closeModal} />
        <Content>{content}</Content>
      </ModalContainer>
    </StyledModal>
  );
}
export default Modal;

const StyledModal = styled.div`
  display: ${(p) => (p.isModalOpen ? "grid" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  place-items: center;
  background: ${colors.modalBackDrop};
  z-index: 999999999999;
`;

const Content = styled.section`
  padding: 24px 32px;
  position: relative;
`;
