import Product from "../Product/Product";
import ProductSearchList from "../ProductSearchList/ProductSearchList";
import { LIST, MOBILE } from "./Route";

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
    }
]