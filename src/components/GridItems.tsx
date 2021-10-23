import { Grid, Link, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Mens Collection | Under 499",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Womens Collection | Under 499",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Mens Footwear | Under 499",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Womens Featwear | Under 499",
  },
];

const GridItems = () => {
  const [data, SetData] = useState<any[]>([]);

  useEffect(() => {
    SetData(itemData);
  }, []);

  return (
    <>
      <Paper square elevation={3}>
        <Grid container>
          {data.map((item, i) => (
            <Grid
              item
              key={i}
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  p: 2,
                  maxWidth: "-webkit-fill-available",
                }}
                src={item.img}
                alt="image"
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Link sx={{ p: 2, fontSize: "small" }}>Show more</Link>
          </Grid>
        </Grid>
        <br />
      </Paper>
    </>
  );
};

export default GridItems;
