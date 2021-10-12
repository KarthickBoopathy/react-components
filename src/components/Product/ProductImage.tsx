import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { productImageThumbnail } from "../../data/data";
import { style } from "../../common/style";



const ProductImage = () => {

    const [data, SetData] = useState<any[]>([]);
    const [displayImage, SetDisplayImage] = useState("");

    useEffect(() => {
        SetData(productImageThumbnail);
        SetDisplayImage(productImageThumbnail[0].image);
    }, []);

    const handleOpen = (image: any) => {
        SetDisplayImage(image);
    }


    const renderDesktopView = () => {

        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4} >
                        <Stack spacing={2} sx={style.productThumbnailStack}>
                            {data.map((item, i) => (
                                <Box key={i} sx={style.productThumbnail} onMouseOver={() => handleOpen(item.image)} onClick={() => handleOpen(item.image)}>
                                    <Box
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
        )
    }

    return (
        <>
            {renderDesktopView()}
        </>
    )

}

export default ProductImage;