import { productDetails } from "../types/schema";

export const productSearchListData = [
  {
    productId: "1",
    image: "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY218_.jpg",
    title: "Apple iPhone 11 (64GB) - Green",
    price: 41999,
    mrp: 49900,
    discount: 16,
    freeDeliveryOver: 300,
    deliveryDays: 23,
  },
  {
    productId: "2",
    image:
      "https://m.media-amazon.com/images/I/81JasJd-vRL._AC_UY327_FMwebp_QL65_.jpg",
    title:
      "Tecno POVA 2 (Energy Blue, 4GB RAM, 64GB Storage)| 7000mAh Battery | 48MP Camera | Helio G85",
    price: 10999,
    mrp: 13499,
    discount: 19,
    freeDeliveryOver: 0,
    deliveryDays: 3,
  },
  {
    productId: "3",
    image:
      "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY436_FMwebp_QL65_.jpg",
    title:
      "Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
    price: 6999,
    mrp: 8499,
    discount: 18,
    freeDeliveryOver: 300,
    deliveryDays: 2,
  },
];



export const productData: productDetails = {
  productId: "p001",
  title:
    "Redmi Note 10S (Frost White, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in",
  price: 34500,
  mrp: 49900,
  discount: 23,
  deliveryCost: 300,
  freeDeliveryOver: 300,
  deliveryDays: 3,
  images: [
    {
      image: "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY218_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81JasJd-vRL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY436_FMwebp_QL65_.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/81SJHWh-dfL._SX679_.jpg",
    },
  ],
  description: [
    "Triple camera setup-64MP (F 1.8) main camera + 12MP (F2.2) Ultra wide camera+ 5MP (F2.4) depth camera 32MP (F2.2) front camera",
    "16.95 centimeters (6.7-inch) Super AMOLED Plus- Infinity O display, FHD+ resolution 1080 x 2400 (FHD+) pixels protected by Gorilla Glass 5",
    "Qualcomm SDM 778G Octa Core 2.4GHz,1.8GHz Processor with the 11 band support for a True 5G experience",
    "Android v11.0, One UI 3.1 operating system, 5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
  ],

  specifications: [
    { "Model Name": "Samsung Galaxy M52 5G" },
    { "Wireless Carrier": "Unlocked for All Carriers" },
    { "Brand": "Samsung" },
    { "Form factor": "Bar" },
  ],
};
