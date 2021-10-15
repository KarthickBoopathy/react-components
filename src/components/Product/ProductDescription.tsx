import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import SimpleAccordion from "../SimpleAccordion";

type Props = {
    specifications?: any[],
    description?: string[],

}




const ProductDescription = ({ specifications, description }: Props) => {

    const renderSpecification = () => {
        const column: any[] = [];
        const row: any[] = [];
        Object.entries(specifications ?? []).forEach(
            ([key, value]) => {
                column.push(key);
                row.push(value);
            }
        );

        return (
            <React.Fragment>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {column.map((item, i) => (
                                    <TableCell component="th" key={i}>{item}</TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                {row.map((item, i) => (
                                    <TableCell component="th" key={i}>{item}</TableCell>))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
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