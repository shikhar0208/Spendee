import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>Spendee</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/Create" activeClassName="is-active" >Create Expense</NavLink>
    </header>
);

export default Header