import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const OfferCarousel = () => {

  const carousalData = [
    {
      img: "https://picsum.photos/800/400?text=First slide&bg=373940",
      title: "Mens Collection | Under 499",
    },
    {
      img: "https://picsum.photos/800/400?text=Second slide&bg=282c34",
      title: "Womens Collection | Under 499",
    },
    {
      img: "https://picsum.photos/800/400?text=Third slide&bg=20232a",
      title: "Mens Footwear | Under 499",
    },
    {
      img: "https://picsum.photos/800/400?text=Fourth slide&bg=20232a",
      title: "Womens Featwear | Under 499",
    },
  ];

  const [data, SetData] = useState<any[]>([]);

  useEffect(() => {
    SetData(carousalData);
  }, [carousalData]);

  return (

    <Carousel fade>
      {data.map((item, i) => (

        <Carousel.Item>
          <Box sx={{p: 2}}>
          <img
            //className="d-block w-100"
            style = {{color: "#eee", width:"100%"}}
            src={item.img}
            alt="First slide"
          />
          </Box>
          <Carousel.Caption>
            <h3>{item.title}</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

      ))}
    </Carousel>
    
  );
}

export default OfferCarousel;