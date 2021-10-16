import Product from "../Product/Product";
import ProductSearchList from "../ProductSearchList/ProductSearchList";
import { CLOTHES, LIST, MOBILE } from "./Route";

export const APPLICATION_MENUS: any[] = [
    {
        menu: "Mobiles",
        path: MOBILE,
        component: Product
    },
    {
        menu: "List",
        path: LIST,
        component: ProductSearchList
    },
    {
        menu: "Clothes",
        path: CLOTHES,
        component: Product
    }
]