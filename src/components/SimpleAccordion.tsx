import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactNode } from "react";

type Props = {
    title: string;
    content: ReactNode;
};

const SimpleAccordion = ({ title, content }: Props) => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="id"
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>{content}</AccordionDetails>
            </Accordion>
        </>
    );
};
export default SimpleAccordion;
