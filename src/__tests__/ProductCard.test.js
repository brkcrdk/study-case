import { render, fireEvent, screen } from "@testing-library/react";
import { ProductCard } from "components";
import { Providers } from "store";

const productInfo = {
  name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
  brand: "Apple",
  color: "Siyah",
  realPrice: 1240,
  discount: 12,
  image: "/product-images/iphone-black.png",
  uuid: "product-12",
};

describe("ProductCard testleri", () => {
  beforeEach(() => {
    render(
      <Providers>
        <ProductCard productInfo={productInfo} />
      </Providers>
    );
  });

  it("Product card render oluyor", () => {
    const productCard = screen.getByTestId("product-card");
    expect(productCard).toBeInTheDocument();
  });

  it("Product carda hover yapınca product info yerine buton görünmeli", () => {
    const productCard = screen.getByTestId("product-card");
    expect(productCard).not.toHaveTextContent("Sepete Ekle");
    fireEvent.mouseOver(productCard);
    expect(productCard).toHaveTextContent("Sepete Ekle");
  });

  it("Sepete ekle butonuna basınca ürün sepete eklenmeli ve ürün eklenince buton disabled olmalı", () => {
    const productCard = screen.getByTestId("product-card");
    fireEvent.mouseOver(productCard);
    const buyButton = screen.getByTestId("buy-button");
    jest.spyOn(global.Storage.prototype, "setItem");
    fireEvent.click(buyButton);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(buyButton).toHaveTextContent("Bu ürünü sepete ekleyemezsiniz");
  });
});
