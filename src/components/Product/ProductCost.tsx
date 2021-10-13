import { Button, Divider, FormControl, Grid, InputLabel, Link, List, ListItem, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { calculateDeliveryDate, currencyFormatter } from "../../common/formula";
import { style } from "../../common/style";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React, { useState } from "react";

const price = 34500;
const mrp = 49900;
const discount = 23;
const deliveryCost = 300;
const deliveryDays = 3;


const ProductCost = () => {
    const [quantity, SetQuantity] = useState(1);
    const handleChange = (event: any) => {
        SetQuantity(event.target.value);
    };

    const renderTitle = () => {
        return (
            <React.Fragment>
                <Typography variant="button" sx={{ color: "#1868b7" }}>Redmi Note 10S (Frost White, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in</Typography>
                <br /><br />
                <Divider />
            </React.Fragment>
        );
    }

    const renderCost = () => {
        return (
            <React.Fragment>
                <List sx={{ width: '100%', maxWidth: 450, bgcolor: 'background.paper' }}>
                    <ListItem>
                        <ListItemText secondary="M.R.P" />
                        <Typography sx={{ textDecoration: "line-through", color: "#565959", fontSize: "small" }}>
                            {currencyFormatter(mrp)}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Deal of the Day" />
                        <Typography>
                            <span><Link sx={style.price} variant="h6"> {currencyFormatter(price)} </Link>  </span>
                            <span style={{ color: "#565959", fontSize: "smaller" }}>({discount}%)</span>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Delivery Cost" />
                        <Typography sx={{ color: "forestgreen" }} variant="body1">{deliveryCost ? (currencyFormatter(deliveryCost)) : "FREE DELIVERY"}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Get it by" />
                        <Typography sx={{ color: "forestgreen" }} variant="body1">{calculateDeliveryDate(deliveryDays)}</Typography>
                    </ListItem>
                </List>
            </React.Fragment>
        );
    }

    const renderBuy = () => {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="item-quantity">Quantity</InputLabel>
                            <Select
                                labelId="select-item-quantity-label"
                                id="simple-select-standard"
                                value={quantity}
                                label="Quantity"
                                onChange={handleChange}
                                defaultValue={quantity}
                                sx={{ width: "100%" }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Grid container spacing={5}>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth color="warning" sx={style.productBuyButtons} startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth color="success" sx={style.productBuyButtons} startIcon={<ShoppingBasketIcon />}>Buy Now</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <Box sx={{ p: 1 }}>
            {renderTitle()}
            {renderCost()}
            {renderBuy()}
        </Box>
    )
}

export default ProductCost;