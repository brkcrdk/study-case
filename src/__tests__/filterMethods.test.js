import {
  handleBrandChange,
  handleColorChange,
  handleSearch,
  handleSortChange,
} from "store/filterMethods";

const initialData = [
  {
    name: "Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)",
    brand: "Apple",
    color: "Siyah",
    realPrice: 1020,
  },
  {
    name: "Huawe Pro 12",
    brand: "Huawei",
    color: "Sarı",
    realPrice: 500,
  },
  {
    name: "Xiaomi Mi a2 lite",
    brand: "Xiaomi",
    color: "Kırmızı",
    realPrice: 300,
  },
  {
    name: "Note 12",
    brand: "Samsung",
    color: "Beyaz",
    realPrice: 700,
  },
  {
    name: "Apple 8",
    brand: "Apple",
    color: "Lacivert",
    realPrice: 700,
  },
];

const dummyData = {
  state: { data: initialData, activePage: 2 },
};
const onSearch = (payload) =>
  handleSearch(dummyData.state, { payload }, initialData);

describe("Find counts testleri", () => {
  it("handleSearch 2 karakter girdikten sonra çalışmalı ve filtreleme resetlenmeli", () => {
    const firstResult = onSearch("no");
    expect(firstResult.data).toHaveLength(5);
    const secondResult = onSearch("note");
    expect(secondResult.data).toHaveLength(1);
    const thirdResult = onSearch("");
    expect(thirdResult.data).toHaveLength(5);
  });

  it("handleSearch ile arama yapıldıktan sonra activePage 1 olmalı", () => {
    const firstResult = onSearch("ap");
    expect(firstResult.activePage).toBe(2);
    const secondResult = onSearch("app");
    expect(secondResult.activePage).toBe(1);
  });
});
