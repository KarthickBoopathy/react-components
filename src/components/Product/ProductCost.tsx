import { Button, Divider, FormControl, Grid, InputLabel, Link, List, ListItem, ListItemText, MenuItem, Select, TableContainer, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { calculateDeliveryDate, currencyFormatter } from "../../common/formula";
import { style } from "../../common/style";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React, { useCallback, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


type Props = {
    data?: any;
}

const ProductCost = ({ data }: Props) => {
    const [quantity, SetQuantity] = useState(1);

    const handleChange = (event: any) => {
        SetQuantity(event.target.value);
    };

    const handleAddtoCart = useCallback((prodId) => {
        console.log(prodId, quantity);
    }, [quantity]);

    const handleBuy = useCallback((prodId) => {
        console.log(prodId, quantity);
    }, [quantity]);

    const renderTitle = () => {
        return (
            <React.Fragment>
                <Typography variant="button" sx={{ color: "#1868b7" }}>{data?.title ?? ""}</Typography>
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
                            {currencyFormatter(data?.mrp ?? 0)}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Deal of the Day" />
                        <Typography>
                            <span><Link sx={style.price} variant="h6"> {currencyFormatter(data?.price ?? 0)} </Link>  </span>
                            <span style={{ color: "#565959", fontSize: "smaller" }}>({data?.discount ?? 0}%)</span>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Delivery Cost" />
                        <Typography sx={{ color: "forestgreen" }} variant="body1">{data?.deliveryCost ? (currencyFormatter(data?.deliveryCost ?? 0)) : "FREE DELIVERY"}</Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Get it by" />
                        <Typography sx={{ color: "forestgreen" }} variant="body1">{calculateDeliveryDate(data?.deliveryDays ?? 0)}</Typography>
                    </ListItem>
                </List>
            </React.Fragment>
        );
    }

    const renderBuy = () => {

        const quantityCount = [];
        for (var i = 1; i <= 10; i++) {
            quantityCount.push(i);
        }

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
                                {quantityCount.map((qty) => (
                                    <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth color="warning" sx={style.productBuyButtons} startIcon={<AddShoppingCartIcon />} onClick={() => handleAddtoCart(data?.productId)}>Cart</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth color="success" sx={style.productBuyButtons} startIcon={<ShoppingBasketIcon />} onClick={() => handleBuy(data?.productId)}>Buy</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }

    const renderWarranty = () => {

        return (
            <React.Fragment>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Replacement</TableCell>
                                <TableCell>Delivery</TableCell>
                                <TableCell>Warranty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{data?.replacementInDays ?? 0} Days</TableCell>
                                <TableCell>{data?.deliveryService ?? 0}</TableCell>
                                <TableCell>{data?.warrantyInYear ?? 0} Year</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </React.Fragment>
        );
    }

    return (
        <Box sx={{ p: 1 }}>
            {renderTitle()}
            {renderCost()}
            {renderBuy()}
            {renderWarranty()}
        </Box>
    )
}

export default ProductCost;