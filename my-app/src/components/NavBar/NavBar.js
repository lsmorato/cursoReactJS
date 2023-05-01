import React, { Component } from "react";
import NavItem from "../NavItem/NavItem";
import './NavBar.css';
import { Navbar } from 'react-bootstrap'


class NavBar extends Component{
    constructor(props){
        super(props)
        this.state ={
            categories: ["Cultura","Gastronomia","Natureza"],
        };
    }

    render(){
        const menuItens = this.state.categories.map(category => <NavItem Name={category} Ref="#"/>)

        return(
            <Navbar className="menu navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    {menuItens}
                </ul>
            </Navbar>
        );
    }
}

export default NavBar;