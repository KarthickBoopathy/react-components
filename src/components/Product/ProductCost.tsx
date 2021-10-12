import { Button, Divider, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { calculateDeliveryDate, currencyFormatter } from "../../common/formula";
import { style } from "../../common/style";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const price = 34500;
const mrp = 49900;
const discount = 23;
const deliveryCost = 300;
const deliveryDays = 3;


const ProductCost = () => {


    const renderTitle = () => {
        return (
            <>
                <Typography variant="button" sx={{ color: "#1868b7" }}>Redmi Note 10S (Frost White, 6GB RAM, 64GB Storage) - Super Amoled Display | 64 MP Quad Camera | Alexa Built in</Typography>
                <br /><br />
                <Divider />
            </>
        );
    }

    const renderBuy = () => {
        return (
            <>
                <Button variant="contained" color="success" startIcon={<ShoppingBasketIcon />} sx={style.productBuyButtons}>Buy</Button>
                <Button variant="contained" color="warning" startIcon={<AddShoppingCartIcon />}>Cart</Button>
            </>
        );
    }

    const renderCost = () => {
        return (
            <>
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
            </>
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