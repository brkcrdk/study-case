import { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Providers, ModalContext } from "store";
import { Modal } from "components";
import userEvent from "@testing-library/user-event";

describe("Modal component testleri", () => {
  beforeEach(() => {
    const ModalTestComponent = () => {
      const { openModal, closeModal } = useContext(ModalContext);

      const handleModal = () =>
        openModal({
          header: "Modal test",
          content: <span>Modal denemesi</span>,
        });

      return (
        <div>
          <button data-testid="testBtn-open" onClick={handleModal}>
            Open Modal
          </button>
          <button data-testid="testBtn-close" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      );
    };
    render(
      <Providers>
        <ModalTestComponent />
        <Modal />
      </Providers>
    );
  });

  it("Modal componenti; openModal ve closeModal eventi çalışıyor", async () => {
    const openBtn = screen.getByTestId("testBtn-open");
    const closeBtn = screen.getByTestId("testBtn-close");
    const modalElement = screen.getByTestId("modal-container");
    expect(modalElement).toHaveStyle({ display: "none" });
    fireEvent.click(openBtn);
    expect(modalElement).toHaveStyle({ display: "grid" });
    fireEvent.click(closeBtn);
    expect(modalElement).toHaveStyle({ display: "none" });
  });

  it("Modal componenti; contentin dışına tıklayınca kapanıyor", () => {
    const openBtn = screen.getByTestId("testBtn-open");
    const modalElement = screen.getByTestId("modal-container");
    fireEvent.click(openBtn);
    expect(modalElement).toHaveStyle({ display: "grid" });
    userEvent.click(document.body);
    expect(modalElement).toHaveStyle({ display: "none" });
  });

  it("Modal componenti; esc tuşuna basınca da modal kapanıyor", () => {
    const openBtn = screen.getByTestId("testBtn-open");
    const modalElement = screen.getByTestId("modal-container");
    fireEvent.click(openBtn);
    expect(modalElement).toHaveStyle({ display: "grid" });
    userEvent.type(modalElement, "{esc}");
    expect(modalElement).toHaveStyle({ display: "none" });
  });
});
