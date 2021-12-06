import Product from "../Product/Product";
import AllProducts from "../ProductSearchList/AllProducts";
import { CLOTHES, LIST, MOBILE } from "./Route";

export const APPLICATION_MENUS: any[] = [
  {
    menu: "Mobiles",
    path: MOBILE,
    component: Product,
  },
  {
    menu: "List",
    path: LIST,
    component: AllProducts,
  },
  {
    menu: "Clothes",
    path: CLOTHES,
    component: Product,
  },
];

export const ACCOUNT: any[] = [
  {
    menu: "Account",
    path: MOBILE,
    component: Product,
  },
  {
    menu: "List",
    path: LIST,
    component: AllProducts,
  },
  {
    menu: "Clothes",
    path: CLOTHES,
    component: Product,
  },
];
