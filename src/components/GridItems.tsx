import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { itemData } from "../data/data";
import { Box } from "@mui/system";


const GridItems = () => {
    const [data, SetData] = useState<any[]>([]);
    const numRows = data.length;

    useEffect(() => {
        SetData(itemData);
    }, []);

    const renderTitle = () => {

        return (
            <React.Fragment>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="button" sx={{ fontSize: "small", color: "crimson" }}>
                        Under ₹599 | Pocket-friendly Fashion Under -friendly Fashion
                    </Typography>
                </Grid>
            
            </React.Fragment>
        );
    }

    const renderOffers = () => {
        return (
            <React.Fragment>
                {data.map((item, i) => (
                    <Grid
                        item
                        key={i}
                        xs={numRows > 1 ? 6 : 12}

                    >
                        <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box
                                key={"title"}
                                component="img"
                                sx={{ width: "85%", height: "85%" }}
                                src={item.img}
                                alt='image'
                            />
                            <Typography gutterBottom sx={{ fontSize: "x-small" }}>
                                {item.title}
                            </Typography>
                        </Stack>
                    </Grid>
                ))}
            </React.Fragment>
        );
    }

    const renderFooter = () => {
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Link sx={{ float: "right", marginRight: 2, fontSize: "x-small" }}>Show more</Link>
                </Grid>
                <br />
            </React.Fragment>
        );
    }


    return (

        <React.Fragment>
            <Paper square variant="outlined" sx={{ borderRadius: 2, maxWidth: 300 }}>
                <Grid container >
                    {renderTitle()}
                    {renderOffers()}
                    {renderFooter()}
                </Grid>
            </Paper>
        </React.Fragment>
    );
};

export default GridItems;
