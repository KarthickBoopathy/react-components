import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { productData } from "../../data/data";
import ProductCost from "./ProductCost";
import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

const Product = () => {
    const [data, SetData] = useState<any>();

    useEffect(() => {
        SetData(productData);
    }, [])

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <ProductImage data={data?.images} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} >
                <ProductCost data={data} />
            </Grid>
            <Grid item xs={12}>
                <ProductDescription specifications={data?.specifications} description={data?.description}/>
            </Grid>
        </Grid>
    );
}
export default Product;