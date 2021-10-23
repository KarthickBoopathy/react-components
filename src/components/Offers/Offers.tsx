import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { offerGridData } from "../../data/data";
import OfferGrid from "./OfferGrid";

const Offers = () => {
    const [data, SetData] = useState<any[]>([]);
    useEffect(() => {
        SetData(offerGridData);
    }, []);

    return (
        <React.Fragment>
            <Stack direction="row" justifyContent="space-evenly">
                {data.map((item, i) => (
                    <OfferGrid key={i} data={item} />
                ))}
            </Stack>
        </React.Fragment>
    );
}

export default Offers;