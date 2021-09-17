import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "components";

function Search() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <SearchInput
      placeholder="Aranacak kriteri yazınız."
      value={searchVal}
      onChange={(e) => setSearchVal(e.target.value)}
    />
  );
}

describe("SearchInput componenti testleri", () => {
  it("Input render oluyor", () => {
    render(<SearchInput />);
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });

  it("Search componenti render oluyor ve input propları çalışıyor", () => {
    render(<Search />);
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Aranacak kriter" } });
    expect(searchInput.value).toBe("Aranacak kriter");
  });
});
