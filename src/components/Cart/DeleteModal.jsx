import styled from "styled-components";
import { colors } from "theme";

function DeleteModal({ closeModal }) {
  return (
    <DeleteModalWrapper>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentiall....
      </span>
      <Controls>
        <button className="reject" onClick={closeModal}>
          Hayır
        </button>
        <button className="accept">Evet</button>
      </Controls>
    </DeleteModalWrapper>
  );
}
export default DeleteModal;

const DeleteModalWrapper = styled.div`
  span {
    font-size: 12px;
  }
`;

const Controls = styled.div`
  button {
    float: right;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    width: 70px;
    height: 26px;
    margin: 20px 0;
  }
  .accept {
    background: ${colors.success};
    margin-right: 10px;
  }
  .reject {
    background: ${colors.danger};
  }
`;
