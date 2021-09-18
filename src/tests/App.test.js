import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Layout componenti testleri", () => {
  test("Layout render oluyor", () => {
    render(<App />);
    const linkElement = screen.getByTestId("app");
    expect(linkElement).toBeInTheDocument();
  });
});
