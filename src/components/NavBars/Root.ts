import Product from "../Product/Product";
import AllProducts from "../ProductSearchList/AllProducts";
import TimeLine from "../Timeline/TimeLine";
import { CLOTHES, LIST, MOBILE, TIMELINE } from "./Route";

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
  {
    menu: "TimeLine",
    path: TIMELINE,
    component: TimeLine,
  }
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
