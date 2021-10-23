import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import { style } from "../../common/style";


type Props = {
    data: any;
}

const OfferGrid = ({ data }: Props) => {


    const renderTitle = () => {

        return (
            <React.Fragment>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="button" sx={style.offerGridOfferTitle}>
                        {data.offerTitle}
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }

    const renderOffers = () => {
        const productCount = data.products.length;
        return (
            <React.Fragment>
                {
                    data.products.map((item: any, i: number) => (
                        <Grid
                            item
                            key={i}
                            xs={productCount && productCount > 1 ? 6 : 12}
                        >
                            <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box
                                    component="img"
                                    sx={{ width: "85%", height: "85%", cursor: "pointer" }}
                                    src={item.showCaseImage}
                                    alt='image'
                                />
                                <Typography gutterBottom sx={style.offerGridTitle}>
                                    {item.title}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))
                }
            </React.Fragment>
        );
    }

    const renderFooter = () => {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Link sx={{ float: "right", marginRight: 2, fontSize: "x-small", cursor: "pointer" }}>Show more</Link>
                </Grid>
                <br />
            </React.Fragment>
        );
    }


    return (
        <Paper square variant="outlined" sx={{ borderRadius: 2, width: 300 }}>
            <Grid container>
                {renderTitle()}
                {renderOffers()}
                {renderFooter()}
            </Grid>
        </Paper>
    );
};

export default OfferGrid;
