import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "components";
const options = [
  { value: "option1", label: "Seçenek 1" },
  { value: "option2", label: "Seçenek 2" },
  { value: "option3", label: "Seçenek 3" },
];

it("Dropdown componenti render oluyor ve propları doğru çalışıyor", () => {
  render(<Dropdown />);
  const dropdownElement = screen.getByTestId("dropdown");
  const noOption = screen.getByTestId("dropdown-noOption");
  expect(dropdownElement).toBeInTheDocument();
  expect(dropdownElement).toHaveTextContent("Dropdown");
  expect(noOption).toBeInTheDocument();
});

describe("Dropdow component testleri", () => {
  beforeEach(() => {
    render(<Dropdown placeholder="Seçenekler" options={options} />);
  });

  it("Placeholder çalışıyor.", () => {
    const dropdownElement = screen.getByTestId("dropdown");
    expect(dropdownElement).toHaveTextContent("Seçenekler");
  });

  it("Verilen seçenekler doğru bir şekilde listeneliyor ve noOption listelenmiyor", () => {
    const dropdownElement = screen.getByTestId("dropdown");
    options.forEach((option) => {
      expect(dropdownElement).toHaveTextContent(option.label);
    });
    expect(screen.queryByTestId("dropdown-noOption")).toBeFalsy();
  });
});
