import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { style } from "../common/style";

const productId = "1";
const image = "https://m.media-amazon.com/images/I/71w3oJ7aWyL._AC_UY218_.jpg";
const title = "Apple iPhone 11 (64GB) - Green";
const price = 39999;
const mrp = 54900;
const save = 14901;
const discount = 27;
const deliveryCost = 300;
const deliveryDate = "02-Nov-2021";


const ProductSearchList = () => {
    const handleOpen = (_id: any) => {
        console.log(_id);
    }

    return (
        <Box>
            <Divider />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Box sx={{width:"100%", background:"white"}}>
                        <Box
                            key={productId}
                            component="img"
                            sx={style.productSearchListImage}
                            src={image}
                            alt='image'
                            onClick={() => handleOpen(productId)}
                        />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography key={productId} sx={style.textPointer}>{title}</Typography>
                        <br />
                        <Typography>
                            <span style={{ color: "#B12704" }}>{price}   </span>
                            <span style={{ textDecoration: "line-through", color: "#565959", fontSize: "smaller" }}>{mrp} </span>
                            <span style={{ color: "#565959", fontSize: "smaller" }}>({discount}%)</span>
                        </Typography>
                        <Typography variant="caption">Delivery Charge : {deliveryCost}</Typography>
                        <br />
                        <Typography variant="body2">Estimated delivery date : {deliveryDate}</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
        </Box>
    );
};
export default ProductSearchList;
