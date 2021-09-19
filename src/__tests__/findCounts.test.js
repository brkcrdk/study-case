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
  it("Hiçbir prop verilmezse boş array döner", () => {
    expect(findCounts()).toEqual([]);
  });

  it("Sadece dataSet verilirse boş array döner", () => {
    expect(findCounts(dataSet)).toEqual([]);
    expect(findCounts("", "")).toEqual([]);
  });

  it("Eğer dataset array yerine başka bir değer olarak verilirse boş değer döner", () => {
    expect(findCounts({}, "1")).toEqual([]);
  });
  it("Başarılı bir şekilde tekrar elemanların sayısını bulur", () => {
    const expectedColorCounts = [
      { value: "siyah", label: "Siyah", count: 1 },
      { value: "sarı", label: "Sarı", count: 1 },
      { value: "kırmızı", label: "Kırmızı", count: 1 },
      { value: "beyaz", label: "Beyaz", count: 3 },
      { value: "lacivert", label: "Lacivert", count: 3 },
    ];
    const expectedBrandCounts = [
      { value: "apple", label: "Apple", count: 4 },
      { value: "samsung", label: "Samsung", count: 2 },
      { value: "xiaomi", label: "Xiaomi", count: 2 },
      { value: "huawei", label: "Huawei", count: 1 },
    ];
    expect(findCounts(dataSet, "color")).toEqual(expectedColorCounts);
    expect(findCounts(dataSet, "brand")).toEqual(expectedBrandCounts);
  });
});
