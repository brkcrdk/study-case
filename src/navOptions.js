import data from "./data.json";
import { findCounts } from "utils";

const navOptions = [
  {
    title: "Renk",
    options: findCounts(data, "color"),
  },
  {
    title: "Sıralama",
    options: [
      { label: "En Düşük Fiyat", value: "priceASC" },
      { label: "En Yüksek Fiyat", value: "priceDESC" },
      { label: "En Yeniler (A>Z)", value: "ASC" },
      { label: "En Yeniler (Z>A)", value: "DESC" },
    ],
  },
  {
    title: "Marka",
    options: findCounts(data, "brand"),
  },
];

export default navOptions;
