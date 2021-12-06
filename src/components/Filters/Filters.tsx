import { Checkbox, FormControlLabel, Slider, Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { style } from "../../common/style";
import { brands } from "../../data/data";


const Filters = () => {
    const [priceRange, SetPriceRange] = useState<number[]>([50000, 100000]);
    const [starRange, SetStarRange] = useState<number[]>([0, 5]);
    const [brand, SetBrand] = useState<any[]>([]);

    useEffect(() => {
        SetBrand(brands);
    }, [])

    const priceValueText = (value: number) => {
        return `${value}`;
    }

    const starValueText = (value: number) => {
        return `${value}`;
    }
    const handlePriceRange = (event: Event, newValue: number | number[]) => {
        SetPriceRange(newValue as number[]);
        console.log(priceRange);
    };

    const handleStarRange = (event: Event, newValue: number | number[]) => {
        SetStarRange(newValue as number[]);
        console.log(starRange);
    };

    const handleBrandsChecked = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        SetBrand({
            ...brand, [index]: {
                ...brand[index],
                isChecked: event.target.checked
            }
        })

    };

    console.log(brand);
    const renderPriceRange = () => {
        return (
            <React.Fragment>
                <Stack>
                    <Typography variant="button">Price Range</Typography>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handlePriceRange}
                        valueLabelDisplay="auto"
                        getAriaValueText={priceValueText}
                        max={100000}
                        sx={{color: "#f50057"}}
                    />
                </Stack>
            </React.Fragment>
        )
    }

    const renderPopularity = () => {
        return (
            <React.Fragment>
                <Stack>
                    <Typography variant="button">Stars</Typography>
                    <Slider
                        getAriaLabel={() => 'Star range'}
                        value={starRange}
                        onChange={handleStarRange}
                        valueLabelDisplay="auto"
                        getAriaValueText={starValueText}
                        max={5}
                        sx={{color: "#f50057"}}
                    />
                </Stack>
            </React.Fragment>
        )
    }

    const renderBrands = () => {
        return (
            <React.Fragment>
                <Stack>
                    <Typography variant="button">Brands</Typography>
                    {Object.values(brand).map((item, i) => (
                        <FormControlLabel
                            key={i}
                            label={item.brandName}
                            control={<Checkbox checked={item.isChecked} />}
                            onChange={(event: any) => handleBrandsChecked(event, i)}
                        />
                    ))}
                </Stack>

            </React.Fragment>
        )
    }

    const renderFilterButton = () => {
        return (
            <React.Fragment>
                <Button variant="contained" sx={style.filterButton} >Filter</Button>
            </React.Fragment>
        )
    }

    return (

            <Box sx={{width: "50%",p: 2,height: "100vh"}}>
                {renderPriceRange()}
                {renderPopularity()}
                {renderBrands()}
                {renderFilterButton()}
            </Box>
    )
}
export default Filters;