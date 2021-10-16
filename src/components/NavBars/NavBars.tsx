import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { APPLICATION_MENUS } from './Root';
import React, { useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const NavBars = () => {

    return (
        <React.Fragment>
            <Navbar style={{ background: "#3b5998" }} variant="dark" sticky="top" expand="sm">
                <Navbar.Brand>
                    <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" />{' '}
                </Navbar.Brand>
                <NavbarToggle />
                <NavbarCollapse>
                    <Nav>
                        {APPLICATION_MENUS.map((item) => (
                            <Nav.Link href={item.path}>{item.menu}</Nav.Link>
                        ))}
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" />
                    {APPLICATION_MENUS.map((item) => (
                        <Route path={item.path} component={item.component} />
                    ))}
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default NavBars;