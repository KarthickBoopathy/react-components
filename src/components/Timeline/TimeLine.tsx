import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { timeLineData } from "../../data/data";

const TimeLine = () => {

    const [data, SetData] = useState<any[]>([]);

    useEffect(() => {
        SetData(timeLineData);
    }, []);

    const handleTimeLineProduct = useCallback(
        (categoryId) => {
            console.log(categoryId);
        }, []
    );
    return (
        <React.Fragment>
            <Carousel nextLabel="" prevLabel="" fade>

                {data.map((item, i) => (
                    <Carousel.Item key={i} onClick={() => handleTimeLineProduct(item.categoryId)}>
                        <Box
                            component="img"
                            sx={{
                                color: "#eee", width: "100%", height: "40vh",
                                objectFit: "cover"
                            }}
                            src={item.timeLineImage}
                            alt='image'
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </React.Fragment>
    );
}

export default TimeLine;