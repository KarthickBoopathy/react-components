import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductCost from "./ProductCost";
import ProductImage from "./ProductImage";

const Product = () => {

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12}>
                <Box sx={{ p: 2 }}>
                    <Typography variant="button" sx={{ color: "forestgreen" }}>Searched Item</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <ProductImage />
            </Grid>
            <Grid item xs={12} sm={6}  md={6} lg={6} >
                <ProductCost />
            </Grid>
        </Grid>


    );
}
export default Product;