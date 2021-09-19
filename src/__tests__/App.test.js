import { render, screen } from "@testing-library/react";
import App from "../App";
import { Providers } from "store";

describe("Layout componenti testleri", () => {
  it("Layout render oluyor", () => {
    render(
      <Providers>
        <App />
      </Providers>
    );
    const linkElement = screen.getByTestId("app");
    expect(linkElement).toBeInTheDocument();
  });
});
