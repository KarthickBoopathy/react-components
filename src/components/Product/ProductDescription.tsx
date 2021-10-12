import { Box } from "@mui/system";
import SimpleAccordion from "../SimpleAccordion";

type Props = {
    specifications?: any[],
    description?: string[],

}




const ProductDescription = ({ specifications, description }: Props) => {
    description = [
        "Triple camera setup-64MP (F 1.8) main camera + 12MP (F2.2) Ultra wide camera+ 5MP (F2.4) depth camera 32MP (F2.2) front camera",
        "16.95 centimeters (6.7-inch) Super AMOLED Plus- Infinity O display, FHD+ resolution 1080 x 2400 (FHD+) pixels protected by Gorilla Glass 5",
        "Qualcomm SDM 778G Octa Core 2.4GHz,1.8GHz Processor with the 11 band support for a True 5G experience",
        "Android v11.0, One UI 3.1 operating system, 5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
    ];

    specifications = [
        { "Model Name": "Samsung Galaxy M52 5G" },
        { "Wireless Carrier": "Unlocked for All Carriers" },
        { "Brand": "Samsung" },
        { "Form factor": "Bar" },
    ];

    const renderSpecification = () => {

        // for (const [key, value] of Object.entries(specifications ?? [])) {
        //     console.log(key, value);
        // }
        Object.entries(specifications ?? []).forEach(([key, value]) => {
            console.log(key, value);
        })


        return (
            <>
                <h1>Hi</h1>
            </>
        );
    }
    const renderDescription = () => {
        return (
            <>
                {description?.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </>
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