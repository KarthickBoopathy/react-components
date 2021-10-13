import { Box } from "@mui/system";
import React from "react";
import SimpleAccordion from "../SimpleAccordion";

type Props = {
    specifications?: any[],
    description?: string[],

}




const ProductDescription = ({ specifications, description }: Props) => {

    console.log(specifications);

    const renderSpecification = () => {

        return (
            <React.Fragment>
            </React.Fragment>
        );
    }
    const renderDescription = () => {
        return (
            <React.Fragment>
                {description?.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </React.Fragment>
        );
    }

    return (
        <Box sx={{ p: 2 }}>
            <SimpleAccordion title="Specifications" content={renderSpecification()} />
            <SimpleAccordion title="Descriptions" content={renderDescription()} />
        </Box>

    );
}
export default ProductDescription;