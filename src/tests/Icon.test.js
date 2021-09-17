import { render, screen } from "@testing-library/react";
import { Icon } from "components";

describe("Icon component testleri", () => {
  it("Icon componenti render oluyor", () => {
    render(<Icon />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("Icon componenti beklendiği gibi propları çalışıyor", () => {
    render(<Icon name="search" size={20} color="red" />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toHaveClass("icon-search");
    expect(iconElement).toHaveStyle({ fontSize: "20px", color: "red" });
  });
});
