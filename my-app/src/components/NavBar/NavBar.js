import React from "react";
import './NavBar.css';
import { Navbar } from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar className="menu navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <a className="nav-link" href="#">Item pai 01</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Item pai 02</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Item pai 03</a>
                </li>
            </ul>
      </Navbar>
    );
}

export default NavBar;