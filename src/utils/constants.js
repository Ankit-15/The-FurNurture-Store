import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "We are successfully catering to the needs of different sectors. We are one of the renowned manufacturers and suppliers offering exclusive assortment of furniture that has high aesthetic appeal and glossy appearance.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "We offer a wide range of furnitures which cater to the needs of hundreds of firms and houses. This further enables us in achieving superior customer satisfaction.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We are serving our customers from last 30 years with extremely high quality products and we believe in customer satisfaction and trust.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
