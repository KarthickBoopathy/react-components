import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { APPLICATION_MENUS } from "./Root";
import React, { useCallback, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import {
    TextField,
    InputAdornment,
    useMediaQuery,
    SpeedDial,
    SpeedDialAction,
    Drawer,
} from "@mui/material";
import { style } from "../../common/style";
import SearchIcon from "@mui/icons-material/Search";
import Product from "../Product/Product";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";


const NavBars = () => {
    const history = useHistory();
    const tabScreen = useMediaQuery("(max-width:1200px)");

    const [search, SetSearch] = useState("");
    const [myAccount, SetMyAccount] = useState(false);

    const navigateTo = useCallback(
        (path) => {
            history.push(path);
        },
        [history]
    );

    const handleSearch = useCallback(
        (event) => {
            if (search && event.key === "Enter") console.log("search", search);
        },
        [search]
    );

    const handleSearchClick = useCallback(() => {
        if (search) console.log("search", search);
    }, [search]);

    const toggleMyAccount = (open: boolean) => {
        SetMyAccount(open);
    };

    const renderSignOut = () => {
        return (
            <Nav.Link onClick={() => navigateTo("/Home")}>
                {tabScreen ? <PowerSettingsNewIcon /> : "Sign Out"}
            </Nav.Link>
        );
    };

    const renderLogoNavBar = () => {
        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" sticky="top">
                    <Navbar.Brand style={{ padding: 10 }}>
                        <img
                            alt="Brand"
                            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                        />
                    </Navbar.Brand>

                    <TextField
                        id="standard"
                        placeholder="Search"
                        InputProps={{
                            style: style.searchBox,
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon
                                        sx={style.searchBox}
                                        onClick={handleSearchClick}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ margin: "auto", width: "80%" }}
                        onChange={(event) => SetSearch(event.target.value)}
                        onKeyDown={handleSearch}
                        variant="standard"
                    />

                    <Nav style={{ margin: "auto" }}>{!tabScreen && renderSignOut()}</Nav>
                </Navbar>
            </React.Fragment>
        );
    };

    const renderMenusNavBar = () => {
        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" expand="xl">
                    <NavbarToggle style={{ marginLeft: 15 }} />
                    <NavbarCollapse>
                        <Nav style={{ padding: 10 }}>
                            {APPLICATION_MENUS.map((item, i) => (
                                <Nav.Link key={i} onClick={() => navigateTo(item.path)}>
                                    {item.menu}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </NavbarCollapse>
                    <Nav className="ms-auto" style={{ marginRight: 15 }}>
                        {tabScreen && renderSignOut()}
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    };

    const renderSpeedDial = () => {
        return (
            <>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{
                        position: "sticky",
                        bottom: 20,
                        float: "right",
                        right: 16,
                    }}
                    icon={<ShoppingBasketIcon />}
                    FabProps={{ style: { background: "#f50057" } }}
                >
                    <SpeedDialAction
                        key="account"
                        icon={<AccountCircleIcon />}
                        tooltipTitle="My Account"
                        onClick={() => toggleMyAccount(true)}
                    />

                    <SpeedDialAction
                        key="cart"
                        icon={<ShoppingCartIcon />}
                        tooltipTitle="My Cart"
                        onClick={() => navigateTo("/MyCart")}
                    />
                </SpeedDial>
                <Drawer
                    anchor="left"
                    open={myAccount}
                    onClose={() => toggleMyAccount(false)}
                >
                    <h1>Hi</h1>
                </Drawer>
            </>
        );
    };

    const renderRouter = () => {
        return (
            <React.Fragment>
                <Route exact path="/" component={Product} />
                {APPLICATION_MENUS.map((item, i) => (
                    <Route key={i} path={item.path} component={item.component} />
                ))}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            {renderLogoNavBar()}
            {renderMenusNavBar()}
            {renderRouter()}
            {renderSpeedDial()}
        </React.Fragment>
    );
};
export default NavBars;
