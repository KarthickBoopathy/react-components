import { Divider, Stack } from "@mui/material"
import Filters from "../components/Filters/Filters"
import AllProducts from "../components/ProductSearchList/AllProducts"

const SearchList = () => {
    return (
        <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={7}
        >
            <Filters />
            <AllProducts />
        </Stack>
    )
}

export default SearchList;