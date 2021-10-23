import { Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { gridData } from "../data/data";
import { Box } from "@mui/system";
import { gridDao, gridDetails } from "../types/schema";


const GridItems = () => {
    const [gridDatas, SetGridDatas] = useState<gridDao>();
    

    useEffect(() => {
        SetGridDatas(gridData);        
    }, []);

    const renderTitle = (item : gridDetails) => {

        return (
            <React.Fragment>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="button" sx={{ fontSize: "small", color: "crimson",  cursor: "pointer" }}>
                        {item?.header}
                    </Typography>
                </Grid>

            </React.Fragment>
        );
    }

    const renderOffers = (props : gridDetails) => {
        const numRows = props?.imgDetails?.length;
        return (
            <React.Fragment>
                {
                //gridDatas?.gridPart?.map((item, i) => (
                    props?.imgDetails?.map((item1, i) => (
                        <Grid
                            item
                            key={i}
                            xs={numRows && numRows > 1 ? 6 : 12}
    
                        >
                            <Stack sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Box
                                    key={"title"}
                                    component="img"
                                    sx={{ width: "85%", height: "85%", cursor: "pointer" }}
                                    src={item1.img}
                                    alt='image'
                                />
                                <Typography gutterBottom sx={{ fontSize: "x-small", cursor: "pointer" }}>
                                    {item1.title}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))

               // ))
                }
            </React.Fragment>
        );
    }

    const renderFooter = (props : gridDetails) => {
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

        <React.Fragment>
            <Grid container >
                {
                    gridDatas?.gridPart?.map((item, i) => (                        
                        <Paper square variant="outlined" key={i} sx={{ borderRadius: 2, maxWidth: 300, margin:1 }}>

                            <Grid container>
                                {renderTitle(item)}
                                {renderOffers(item)}
                                {renderFooter(item)}
                            </Grid>
                        </Paper>
                    ))

                }

            </Grid>
        </React.Fragment>
    );
};

export default GridItems;
