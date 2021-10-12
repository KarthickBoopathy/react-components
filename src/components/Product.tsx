import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { style } from "../common/style";
import { productImageThumbnail } from "../data/data";

const Product = () => {
    const [data, SetData] = useState<any[]>([]);
    const [displayImage, SetDisplayImage] = useState("");

    useEffect(() => {
        SetData(productImageThumbnail);
        SetDisplayImage(productImageThumbnail[0].image);
    }, []);

    const handleOpen = (image: any) => {
      SetDisplayImage(image);
    }

    return (
        <>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4} >
                    <Stack spacing={2} sx={style.productThumbnailStack}>
                        {data.map((item, i)=>(
                        <Box key={i} sx={style.productThumbnail} onMouseOver={() => handleOpen(item.image)} onClick={() => handleOpen(item.image)}>
                            <Box
                                // key={"image" + i}
                                component="img"
                                sx={{ maxWidth: "80%", maxHeight: "90%" }}
                                src={item.image}
                                alt='image'
                            />
                        </Box>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={8} >
                    <Box
                        key={"title"}
                        component="img"
                        sx={{ maxWidth: "80%", maxHeight: "90%" }}
                        src={displayImage}
                        alt='image'
                    />
                </Grid>
            </Grid>
        </>
    );
}
export default Product;