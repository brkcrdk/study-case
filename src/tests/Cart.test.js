import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "components";
import { Providers } from "store";

describe("Cart component testleri", () => {
  beforeEach(() => {
    render(
      <Providers>
        <Cart />
      </Providers>
    );
  });

  it("Cart componenti render oluyor", () => {
    const cartElement = screen.getByTestId("cart");
    expect(cartElement).toBeInTheDocument();
  });

  it("Cart componentindeki hover eventleri çalışıyor", () => {
    const cartElement = screen.getByTestId("cart");
    const cartContent = screen.getByTestId("cart-content");
    fireEvent.mouseEnter(cartElement);
    expect(cartContent).toBeVisible();
    fireEvent.mouseLeave(cartElement);
    expect(cartContent).not.toBeVisible();
  });
});
