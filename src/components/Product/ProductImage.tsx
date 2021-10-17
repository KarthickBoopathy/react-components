import React, { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { style } from "../../common/style";

type Props = {
    data?: any[];
}

const ProductImage = ({ data }: Props) => {
    const [displayImage, SetDisplayImage] = useState("");

    useEffect(() => {
        if (data)
            SetDisplayImage(data[0].image)
    }, [data]);

    const handleOpen = (image: any) => {
        SetDisplayImage(image);
    }

    const renderDesktopView = () => {

        return (
            <React.Fragment>
                <Grid container sx={{ p: 1 }}>
                    <Grid item xs={4} >
                        <Stack spacing={2} sx={style.productThumbnailStack}>
                            {data?.map((item, i) => (
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
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {renderDesktopView()}
        </React.Fragment>
    )

}

export default ProductImage;