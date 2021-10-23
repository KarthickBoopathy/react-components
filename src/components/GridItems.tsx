import { Card, CardActionArea, CardMedia, Grid, Link, Paper, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { itemData } from "../data/data";
import { style } from "../common/style";

const GridItems = () => {
    const [data, SetData] = useState<any[]>([]);
    const numRows = data.length;

    useEffect(() => {
        SetData(itemData);
    }, []);

    return (
        <>
            <Paper square elevation={2}>

                <Grid container sx={{ width: "100" }}>
                    <Grid item xs={12}>
                        <Typography variant="button" gutterBottom sx={{ p: 2, textAlign: "center" }}>
                            Under ₹599 | Pocket-friendly Fashion
                        </Typography>
                    </Grid>

                    {
                        data.map((item, i) => (
                            <>
                                <Grid
                                    item
                                    key={i}
                                    xs={numRows > 1 ? 6 : 12}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Card sx={{
                                        border: "none",
                                        boxShadow: "none", maxWidth: "-webkit-fill-available", p: 1
                                    }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="100%"
                                                image={item.img}
                                                alt={item.img}
                                                sx={style.gridMedia}
                                            />
                                            <Typography gutterBottom
                                                sx={{ fontSize: "small" }}>
                                                {item.title}
                                            </Typography>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </>
                        ))}

                    <Grid item xs={12}>
                        <Link sx={{ p: 2, fontSize: "small" }}>Show more</Link>
                    </Grid>
                </Grid>
                <br />
            </Paper>
        </>
    );
};

export default GridItems;
