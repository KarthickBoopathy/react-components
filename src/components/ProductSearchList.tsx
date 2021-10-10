import { Divider, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { calculateDeliveryDate, currencyFormatter } from "../common/formula";
import { style } from "../common/style";
import { productSearchListData } from "../data/data";


const ProductSearchList = () => {
    const [data, SetData] = useState<any[]>([]);

    useEffect(() => {
        SetData(productSearchListData);
    }, []);

    const handleOpen = (_id: any) => {
        console.log(_id);
    }

    return (
        <>
            {data.map((item, i) => (
                <Box key={i}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Box sx={{ width: "100%", background: "white" }} onClick={() => handleOpen(item.productId)}>
                                <Box
                                    key={"title" + item.productId}
                                    component="img"
                                    sx={style.productSearchListImage}
                                    src={item.image}
                                    alt='image'
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={8}>
                            <Box>
                                <Typography sx={style.textPointer} variant="body1" onClick={() => handleOpen(item.productId)}>{item.title}</Typography>
                                <Typography>
                                    <span><Link sx={style.price} variant="button" onClick={() => handleOpen(item.productId)}> {currencyFormatter(item.price)} </Link>  </span>
                                    <span style={{ textDecoration: "line-through", color: "#565959", fontSize: "smaller" }}>{currencyFormatter(item.mrp)} </span>
                                    <span style={{ color: "#565959", fontSize: "smaller" }}>({item.discount}%)</span>
                                </Typography>
                                <Typography sx={{ fontSize: "medium", color: "green", }} variant="caption">{item.deliveryCost ? ("Delivery Charge : " + currencyFormatter(item.deliveryCost)) : "FREE DELIVERY"}</Typography>
                                <Typography variant="body2">
                                    <span style={{ color: "#565959", }}>Get it by </span>
                                    <span style={{ color: "red", fontWeight: 400 }}>{calculateDeliveryDate(item.deliveryDays)}</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                </Box>
            ))}
        </>
    );
};
export default ProductSearchList;
