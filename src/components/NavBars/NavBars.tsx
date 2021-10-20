import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { ACCOUNT, APPLICATION_MENUS } from "./Root";
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
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SideNav from "./SideNav";

const NavBars = () => {
    const history = useHistory();
    const tabScreen = useMediaQuery("(max-width:1200px)");

    const [search, SetSearch] = useState("");
    const [openSideNav, SetOpenSideNav] = useState(false);
    const [menu, SetMenu] = useState<any[]>([]);

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

    const toggleSideNav = (open: boolean, menuList?: any[]) => {
        SetOpenSideNav(open);
        if (menuList)
            SetMenu(menuList);
    };

    const renderSignOut = () => {
        return (
            <Nav.Link onClick={() => navigateTo("/Home")}>
                {tabScreen ? <PowerSettingsNewIcon /> : "Sign Out"}
            </Nav.Link>
        );
    };

    const renderSignIn = () => {
        return (
            <Nav.Link onClick={() => navigateTo("/Home")}>
                {tabScreen ? <LockOpenIcon /> : "Sign In"}
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

                    <Nav style={{ margin: "auto" }}>{!tabScreen && renderSignIn()}</Nav>
                </Navbar>
            </React.Fragment>
        );
    };

    const renderMenusNavBar = () => {
        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" expand="xl">

                    {tabScreen ?
                        <NavbarToggle style={{ marginLeft: 15 }} onClick={() => toggleSideNav(true, APPLICATION_MENUS)} /> :

                        <Nav style={{ padding: 10 }}>
                            {APPLICATION_MENUS.map((item, i) => (
                                <Nav.Link key={i} style={{ textAlign: "center" }} onClick={() => navigateTo(item.path)}>
                                    {item.menu}
                                </Nav.Link>
                            ))}
                        </Nav>
                    }

                    <Nav className="ms-auto" style={{ marginRight: 15 }}>
                        {tabScreen && renderSignIn()}
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
                        onClick={() => toggleSideNav(true, ACCOUNT)}
                    />

                    <SpeedDialAction
                        key="cart"
                        icon={<ShoppingCartIcon />}
                        tooltipTitle="My Cart"
                        onClick={() => navigateTo("/MyCart")}
                    />
                </SpeedDial>

            </>
        );
    };

    const renderSideNav = () => {
        return (
            <React.Fragment>
                <Drawer
                    anchor="left"
                    open={openSideNav}
                    onClose={() => toggleSideNav(false)}
                >
                    <SideNav navMenus={menu} />
                </Drawer>
            </React.Fragment>
        )
    }

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
            {renderSideNav()}
        </React.Fragment>
    );
};
export default NavBars;
