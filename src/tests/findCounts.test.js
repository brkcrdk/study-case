import { findCounts } from "utils";

const dataSet = [
  {
    brand: "Apple",
    color: "Siyah",
  },
  {
    brand: "Apple",
    color: "Sarı",
  },
  {
    brand: "Apple",
    color: "Kırmızı",
  },
  {
    brand: "Samsung",
    color: "Beyaz",
  },
  {
    brand: "Apple",
    color: "Lacivert",
  },
  {
    brand: "Samsung",
    color: "Beyaz",
  },
  {
    brand: "Xiaomi",
    color: "Lacivert",
  },
  {
    brand: "Xiaomi",
    color: "Beyaz",
  },
  {
    brand: "Huawei",
    color: "Lacivert",
  },
];

describe("Find counts testleri", () => {
  it("Dataset verilmezse boş array dönmeli", () => {
    const sum = (a, b) => {
      return a + b;
    };
    expect(sum(2, 3)).toBe(5);
  });
});
