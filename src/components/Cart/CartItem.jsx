import { useContext } from "react";
import { ModalContext } from "store";
import styled from "styled-components";
import { colors } from "theme";
import DeleteModal from "./DeleteModal";

function CartItem({ image, name, uuid }) {
  const { openModal, closeModal } = useContext(ModalContext);

  const handleModal = () =>
    openModal({
      header: "Ürünü silmek istediğinize emin misiniz?",
      content: <DeleteModal closeModal={closeModal} uuid={uuid} />,
    });

  return (
    <CartItemWrapper>
      <img src={image} alt={name} />
      <ItemInformations>
        <span>{name}</span>
        <button onClick={handleModal}>Kaldır</button>
      </ItemInformations>
    </CartItemWrapper>
  );
}
export default CartItem;

const CartItemWrapper = styled.li`
  max-height: 72px;
  margin-bottom: 24px;
  display: flex;
  &:last-of-type {
    margin-bottom: 0;
  }
  img {
    height: 100%;
    padding: 7px;
    border: 1px solid ${colors.productImageBorder};
    border-radius: 8px;
  }
`;

const ItemInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  span {
    color: ${colors.darkGray};
    font-size: 12px;
  }
  button {
    width: 50px;
    height: 18px;
    color: ${colors.danger};
    border: 1px solid ${colors.danger};
    border-radius: 4px;
    font-size: 10px;
  }
`;
