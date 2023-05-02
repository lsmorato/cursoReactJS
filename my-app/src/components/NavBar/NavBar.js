import React, { Component } from "react";
import NavItem from "../NavItem/NavItem";
import Search  from '../Search/Search'
import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css';
import { Navbar } from 'react-bootstrap'



class NavBar extends Component{
    constructor(props){
        super(props)
        this.state ={
            categories: ["Cultura","Gastronomia","Natureza"],
            produtos: []
        };
    }

    loadItemListContainer = () => {
            this.setState({ produtos : [
                {id: 1, nome: "monitor", preco: 150},
                {id: 2, nome: "mouse", preco: 10},
                {id: 3, nome: "teclado", preco: 7},
                {id: 3, nome: "teclado diferente", preco: 40},
            ]});
    }

    render(){
        const menuItens = this.state.categories.map(category => <NavItem Name={category} Ref="#"/>)

        return(
            <Navbar className="navbar navbar-expand-lg navbar-dark nav-menu">
                <span className="navbar-brand mb-0 h1">TripTrial</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {menuItens}
                    </ul> 
                </div>
               <Search/>
               <CartWidget itensContainer="5"/>
            </Navbar>
        );
    }
}

export default NavBar;