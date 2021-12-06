import { Grid } from "@mui/material"
import Filters from "../components/Filters/Filters"
import AllProducts from "../components/ProductSearchList/AllProducts"

const SearchList = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Filters />
            </Grid>
            <Grid item xs={8} >
                <AllProducts />
            </Grid>
        </Grid>
    )
}

export default SearchList;