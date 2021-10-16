import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { APPLICATION_MENUS } from './Root';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBars = () => {


    const renderSearchNavBar = () => {

        return (
            <React.Fragment>
                <Navbar style={{ background: "#3b5998" }} variant="dark" sticky="top">
                    <Navbar.Brand>
                        <img alt="Brand" src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />{' '}
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
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
                        <Nav>
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
                        <Route exact path="/" />
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