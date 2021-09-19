import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "components";
import { Providers } from "store";

const PaginationTest = () => {
  const [active, setActive] = useState(1);

  const handleNext = () => {
    if (active < 12) return setActive(active + 1);
  };
  const handlePrev = () => {
    if (active > 1) return setActive(active - 1);
  };

  return (
    <Pagination
      activePage={active}
      pageCount={12}
      handleNext={handleNext}
      handleGoTo={(e) => setActive(e)}
      handlePrev={handlePrev}
    />
  );
};

describe("Dropdow component testleri", () => {
  beforeEach(() => {
    render(
      <Providers>
        <PaginationTest />
      </Providers>
    );
  });

  it("Başlangıç 1 de olmalı ve active stateinde olmalı", () => {
    const paginationElement = screen.getByTestId("pagination");
    expect(paginationElement).toBeInTheDocument();
    const paginationItems = screen.getAllByTestId("pagination-item");
    expect(paginationItems[0]).toHaveClass("active");
  });

  it("Başlangıçta prev butonu disabled olmalı", () => {
    const paginationPrev = screen.getByTestId("pagination-prev");
    expect(paginationPrev).toHaveAttribute("disabled");
  });

  it("Next butonuna basınca ikinci aktif olmalı", () => {
    const paginationNext = screen.getByTestId("pagination-next");
    const paginationItems = screen.getAllByTestId("pagination-item");
    fireEvent.click(paginationNext);
    expect(paginationItems[1]).toHaveClass("active");
    expect(paginationItems[0]).not.toHaveClass("active");
  });

  it("Arada bir butona tıklayınca pagination sırası tıklanan olmalı", () => {
    const paginationItems = screen.getAllByTestId("pagination-item");
    const thirdElement = paginationItems[2];
    fireEvent.click(thirdElement);
    expect(thirdElement).toHaveClass("active");
    expect(thirdElement).toHaveTextContent(3);
  });

  it("Başlangıçta next butonu aktif olmalı, aktif eleman son olunca disabled olmalı", () => {
    const paginationNext = screen.getByTestId("pagination-next");
    const paginationItems = screen.getAllByTestId("pagination-item");
    const lastElement = paginationItems[paginationItems.length - 1];
    expect(paginationNext).not.toHaveAttribute("disabled");
    fireEvent.click(lastElement);
    expect(paginationNext).toHaveAttribute("disabled");
  });
});
