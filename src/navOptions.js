import data from "./data.json";
import { findCounts } from "utils";

const test = findCounts(data, "color");

const navOptions = [
  {
    title: "Renk",
    options: [
      { label: "Lacivert", value: "lacivert" },
      { label: "Sarı", value: "sarı" },
      { label: "Siyah", value: "siyah" },
      { label: "Beyaz", value: "beyaz" },
    ],
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
    options: [
      { label: "Samsung", value: "samsung" },
      { label: "Nokia", value: "nokia" },
      { label: "Apple", value: "apple" },
      { label: "LG", value: "lg" },
      { label: "Huawei", value: "huawei" },
      { label: "Xiamoi", value: "xiaomi" },
      { label: "General Mobile", value: "generalMobile" },
    ],
  },
];

export default navOptions;
