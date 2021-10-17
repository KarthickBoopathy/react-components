import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { APPLICATION_MENUS } from './Root';
import React, { useCallback, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField, InputAdornment } from '@mui/material';
import { style } from '../../common/style';
import SearchIcon from '@mui/icons-material/Search';
import Product from '../Product/Product';

const NavBars = () => {
    const [search, SetSearch] = useState('');

    const handleSearch = useCallback((event) => {
        if (search && event.key === "Enter")
            console.log("search", search);
    }, [search])

    const handleSearchClick = useCallback(() => {
        if (search)
            console.log("search", search);
    }, [search])

    const renderSearchNavBar = () => {
        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" sticky="top">

                    <Navbar.Brand style={{ padding: 5 }}>
                        <img alt="Brand" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />{' '}
                    </Navbar.Brand>

                    <TextField
                        id="standard"
                        placeholder="Search"
                        InputProps={{
                            style: style.searchBox,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon sx={style.searchBox} onClick={handleSearchClick} />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ width: "85%", margin: "auto" }}
                        onChange={(event) => SetSearch(event.target.value)}
                        onKeyDown={handleSearch}
                        variant="standard" />

                    <Nav className="ms-auto">
                        <Nav.Link href="#memes"><AccountCircleIcon /></Nav.Link>
                        <Nav.Link href="#deets"><ShoppingCartIcon /></Nav.Link>
                    </Nav>
                </Navbar>
            </React.Fragment>
        )
    }

    const renderMenusNavBar = () => {

        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" expand="sm">
                    <Navbar.Brand>{' '}</Navbar.Brand>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <Nav style={{ marginLeft: 10 }}>
                            {APPLICATION_MENUS.map((item, i) => (
                                <Nav.Link key={i} href={item.path} target="_blank" >{item.menu}</Nav.Link>
                            ))}
                        </Nav>
                    </NavbarCollapse>
                </Navbar>
            </React.Fragment>
        )
    }

    const renderRouter = () => {

        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Product} />
                        {APPLICATION_MENUS.map((item, i) => (
                            <Route key={i} path={item.path} component={item.component} />
                        ))}
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {renderSearchNavBar()}
            {renderMenusNavBar()}
            {renderRouter()}
        </React.Fragment>
    )
}
export default NavBars;