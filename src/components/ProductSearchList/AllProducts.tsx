import { Pagination, Stack } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { productSearchListData } from "../../data/data";
import ProductList from "./ProductList";

const AllProducts = () => {
    const [data, SetData] = useState<any[]>([]);

    useEffect(() => {
        SetData(productSearchListData);
    }, []);

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        //fetch data based on pagenumber and set it into SetData
        console.log(page);
    }, [])



    return (
        <Stack sx={{maxWidth: 800}}>
            <ProductList data={data} />
            <Pagination count={10} sx={{ display: "flex", justifyContent: "center" }} onChange={handleChange} />
            <br />
        </Stack>
    );
}

export default AllProducts;