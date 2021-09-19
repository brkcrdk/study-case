import { paginate } from "utils";

const testData = [...Array(24).keys()].map((i) => ({ name: `İtem-${i}` }));

describe("Find counts testleri", () => {
  it("Default olarak birinci sayfayı döner", () => {
    const { data } = paginate({ data: testData });
    expect(data).toEqual(testData.slice(0, 12));
  });

  it("Pagecount doğru çalışır", () => {
    const { pageCount: page1 } = paginate({ data: testData });
    const { pageCount: page2 } = paginate({ data: testData, itemCount: 4 });
    expect(page1).toBe(2);
    expect(page2).toBe(6);
  });

  it("Eğer page 0 ve 0dan küçük verilirse ilk sayfayı döner", () => {
    const { data } = paginate({ page: -2, data: testData });
    expect(data).toEqual(testData.slice(0, 12));
  });

  it("Eğer data array değilse boş array döner", () => {
    const { data } = paginate({ data: {} });
    expect(data).toEqual([]);
  });
});
