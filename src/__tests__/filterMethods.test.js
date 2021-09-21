import {
  handleBrandChange,
  handleColorChange,
  handleSearch,
  handleSortChange,
  filterProducts,
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
    brand: "Huawei",
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
  state: { data: initialData, activePage: 2, sort: "", color: [], brand: [] },
};
const onSearch = (payload) =>
  handleSearch(dummyData.state, { payload }, initialData);

const onSortChange = (payload) =>
  handleSortChange(dummyData.state, { payload }, initialData);

describe("Find counts testleri", () => {
  it("handleSearch 2 karakter girdikten sonra çalışmalı ve filtreleme resetlenmeli", () => {
    const firstResult = onSearch("no");
    expect(firstResult.data).toHaveLength(5);
    const secondResult = onSearch("note");
    expect(secondResult.data).toHaveLength(1);
    const thirdResult = onSearch("");
    expect(thirdResult.data).toHaveLength(5);
  });

  it("handleSearch ile arama yapıldıktan sonra activePage resetleniyor", () => {
    const firstResult = onSearch("ap");
    expect(firstResult.activePage).toBe(2);
    const secondResult = onSearch("app");
    expect(secondResult.activePage).toBe(1);
  });

  it("handleChangeSort; ASC çalışıyor ve activePage resetleniyor", () => {
    expect(dummyData.state.sort).toBe("");
    const result = onSortChange("ASC");
    expect(result.sort).toBe("ASC");
    expect(result.activePage).toBe(1);
    expect(result.data[4].brand).toBe("Xiaomi");
  });

  it("handleChangeSort; DESC çalışıyor ve activePage resetleniyor", () => {
    expect(dummyData.state.sort).toBe("");
    const result = onSortChange("DESC");
    expect(result.sort).toBe("DESC");
    expect(result.activePage).toBe(1);
    expect(result.data[0].brand).toBe("Xiaomi");
  });

  it("handleChangeSort; priceASC çalışıyor ve activePage resetleniyor", () => {
    expect(dummyData.state.sort).toBe("");
    const result = onSortChange("priceASC");
    expect(result.sort).toBe("priceASC");
    expect(result.activePage).toBe(1);
    expect(result.data[4].brand).toBe("Apple");
    expect(result.data[0].brand).toBe("Xiaomi");
  });

  it("handleChangeSort; priceDESC çalışıyor ve activePage resetleniyor", () => {
    expect(dummyData.state.sort).toBe("");
    const result = onSortChange("priceDESC");
    expect(result.sort).toBe("priceDESC");
    expect(result.activePage).toBe(1);
    expect(result.data[0].brand).toBe("Apple");
    expect(result.data[3].brand).toBe("Huawei");
  });

  it("handleChangeSort; eğer seçili bir sort varsa ve tekrar aynı sort ile istek atılmışsa sort sıfırlanıyor ve activePage resetleniyor", () => {
    const result = handleSortChange(
      { ...dummyData.state, sort: "priceASC" },
      { payload: "priceASC" },
      initialData
    );
    expect(result.sort).toBe("");
    expect(result.activePage).toBe(1);
  });

  it("handleColorChange; seçilen renk statete yoksa eklenir varsa çıkar ve active page resetlenir", () => {
    const result = handleColorChange(dummyData.state, { payload: "kırmızı" });
    expect(result.color).toContain("kırmızı");
    expect(result.activePage).toBe(1);
    const result2 = handleColorChange(
      { ...result, activePage: 2 },
      { payload: "sarı" }
    );
    expect(result2.color).toContain("sarı");
    expect(result2.color).toContain("kırmızı");
    expect(result2.activePage).toBe(1);
    const result3 = handleColorChange(result2, { payload: "sarı" });
    expect(result3.color).not.toContain("sarı");
    expect(result3.color).toContain("kırmızı");
  });

  it("handleBrandChange; seçilen brand statete yoksa eklenir varsa çıkar ve active page resetlenir", () => {
    const result = handleBrandChange(dummyData.state, { payload: "apple" });
    expect(result.brand).toContain("apple");
    expect(result.activePage).toBe(1);
    const result2 = handleBrandChange(
      { ...result, activePage: 2 },
      { payload: "huawei" }
    );
    expect(result2.brand).toContain("apple");
    expect(result2.brand).toContain("huawei");
    expect(result2.activePage).toBe(1);
    const result3 = handleBrandChange(result2, { payload: "apple" });
    expect(result3.brand).not.toContain("apple");
    expect(result3.brand).toContain("huawei");
  });

  it("filterProducts; herhangi bir filtre girilmezse tüm ürünleri verir", () => {
    const result = filterProducts(initialData, [], [], initialData);
    expect(result).toEqual(initialData);
    expect(result).toHaveLength(5);
  });

  it("filterProducts; sadece renk verilince renge göre arama yapar", () => {
    const expectedBrands = [];
    const expectedColors = ["sarı", "kırmızı"];
    const expectedColors2 = ["kırmızı"];
    const result = filterProducts(
      initialData,
      expectedColors,
      expectedBrands,
      initialData
    );
    expect(result).toHaveLength(2);
    const result2 = filterProducts(
      initialData,
      expectedColors2,
      expectedBrands,
      initialData
    );
    expect(result2).toHaveLength(1);
  });

  it("filterProducts; sadece marka verilince markaya göre arama yapar", () => {
    const expectedColors = [];
    const expectedBrands = ["apple"];
    const expectedBrands2 = ["apple", "huawei"];

    const result = filterProducts(
      initialData,
      expectedColors,
      expectedBrands,
      initialData
    );
    expect(result).toHaveLength(2);

    const result2 = filterProducts(
      initialData,
      expectedColors,
      expectedBrands2,
      initialData
    );
    expect(result2).toHaveLength(4);
  });

  it("filterProducts; her iki türde de filtre girilirse ona göre arama yapar", () => {
    const expectedColors = ["siyah"];
    const expectedColors2 = ["lacivert", "kırmızı", "siyah"];
    const expectedBrands = ["apple"];
    const expectedBrands2 = ["apple", "xiaomi"];

    const result = filterProducts(
      initialData,
      expectedColors,
      expectedBrands,
      initialData
    );
    expect(result).toHaveLength(1);
    const result2 = filterProducts(
      initialData,
      expectedColors2,
      expectedBrands2,
      initialData
    );
    expect(result2).toHaveLength(3);
  });

  it("filterProducts; eğer bir arama yapılmışsa filtreler arama sonucunda gelen data göre çalışır", () => {
    const expectedColors = ["lacivert", "kırmızı", "siyah"];
    const expectedBrands = ["apple", "xiaomi"];
    const search = onSearch("note");
    const search2 = onSearch("xiao");

    const result = filterProducts(
      search.data,
      expectedColors,
      expectedBrands,
      initialData
    );
    expect(result).toHaveLength(0);
    const result2 = filterProducts(
      search2.data,
      expectedColors,
      expectedBrands,
      initialData
    );
    expect(result2).toHaveLength(1);
  });
});
