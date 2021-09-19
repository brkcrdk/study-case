import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "components";
import { Providers } from "store";
function Search() {
  const [searchVal, setSearchVal] = useState("");

  return (
    <Providers>
      <SearchInput
        placeholder="Aranacak kriteri yazınız."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </Providers>
  );
}

describe("SearchInput componenti testleri", () => {
  it("Input render oluyor", () => {
    render(
      <Providers>
        <SearchInput />
      </Providers>
    );
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
