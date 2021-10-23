import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, styled, Typography } from "@mui/material";

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Mens Collection | Under 499',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Womens Collection | Under 499',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Mens Footwear | Under 499',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Womens Featwear | Under 499',
    },
  ];

const GridItems= () => {

    
    return(
        <Box>

  <Typography variant="h5" gutterBottom component="div">
        Under ₹599 | Pocket-friendly Fashion
        </Typography>

         <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {itemData.map((item) => (
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
  
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
  
          ))}
        </Grid>
      </Box>
    );

};
export default GridItems;